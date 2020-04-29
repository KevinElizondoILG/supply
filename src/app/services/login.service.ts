import { ApistockService } from 'src/app/services/apistock.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserInfo } from './../models/users/users';
import { environment } from 'src/environments/environment.prod';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService implements OnInit {
  public SERVER = environment.SERVER;
  public API_URL = environment.API_URL;
  public password: string;
  public username: string;
  public alert: boolean;
  private store: string;
  public body: any;
  public isAdmin: boolean;
  public menu: any;
  public roll: any;
  public route: any;
  public consorcio: string;
  public country: string;
  private ENV=environment
  private CRC= this.SERVER + this.API_URL +this.ENV.CRC+this.ENV.TOKEN
  private PTY= this.SERVER + this.API_URL +this.ENV.PTY+this.ENV.TOKEN
  private PP= this.SERVER + this.API_URL +this.ENV.PP+this.ENV.TOKEN
  private NPP= this.SERVER + this.API_URL +this.ENV.NPP+this.ENV.TOKEN
  private TEST= this.SERVER + this.API_URL +this.ENV.TEST+this.ENV.TOKEN



  ngOnInit() {



  }

  constructor(private http: HttpClient, private _stock: ApistockService, private router: Router) {
    this.store = null;
  }

  getLogin(username, password) {
    this.body = {
      EMAIL: username,
      CLAVE: password,
      NOMBRE: null,
      APELLIDO: null,
      TIPO: null
    };
    const headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    // const Options = new RequestOptions({ headers: headers });

    this.http.post(this.SERVER + this.API_URL + 'login', this.body).subscribe((Respuesta: UserInfo) => {
      if (Respuesta != null) {
        this.alert = true;
        this.username = Respuesta.Data.EMAIL;
        this.store = Respuesta.Data.CODIGOSUCURSAL;
        this.roll = Respuesta.Data.TIPO;
        this.consorcio = Respuesta.Data.CODIGOCONSORCIO;
        this.country = Respuesta.Country;


        localStorage.clear();
        localStorage.setItem('currentUser', this.username);
        localStorage.setItem('roll', this.roll);
        localStorage.setItem('consorcio', this.consorcio);
        localStorage.setItem('country', this.country);

        if (this.country === "CRC") {
          switch (Number(this.consorcio)) {
            case 32:
              localStorage.setItem('store', this.store);
              this.roll === 'EXT_SUC' ? (
                this.isAdmin = true,
                this.getRoute(this.store).subscribe(rou => {
                  this.route = rou,
                    localStorage.setItem('route', JSON.stringify(this.route));
                  location.reload();
                  this._stock.getStoreStock(this.store).subscribe(stock => {
                    localStorage.setItem('stock', JSON.stringify(stock));
                  });
                })
              ) : this.isAdmin = false;
              this.isAdmin === true ? this.router.navigate(['/order']) : this.router.navigate(['/coordination']);
              break;

            case 40:
              localStorage.setItem('store', this.store);
              //   this.roll === 'INT' ? (console.log('soy admin ILG')) : (console.log('SOY' + this.roll));
              this.router.navigate(['/inventory']);
              break;

            default:
              this.router.navigate(['/coordination']);
              break;
          }
        } else if (this.country === "PTY") {
          switch (Number(this.consorcio)) {
            case 40:
              //   this.roll === 'INT' ? (console.log('soy admin ILG')) : (console.log('SOY' + this.roll));
              this.router.navigate(['/InvGeneralReport']);
              break;

            default:
              this.router.navigate(['/InvGeneralReport']);
              break;
          }
        }

      } else {
        this.alert = false;
      }
      return Respuesta;
    });
  }

  getRoute(s) {
    //  console.log(this.store);
    return this.http.get(this.PP + this.ENV.ROUTESSTORE + s);
  }


  getUserinfo(username, roll): Observable<UserInfo> {
    this.body = {
      EMAIL: username,
      TIPO: roll
    };
    return this.http.post<UserInfo>(this.SERVER + this.API_URL + 'UserInfo', this.body);
  }


  currentUser() {
    if (localStorage.getItem('currentUser') || localStorage.getItem('store')) {
      // We have items
      return true;
    } else {
      // No items
      return false;
    }
  }

  getLogOut() {
    if (localStorage.key(0) || localStorage.key(1)) {
      // We have items
      localStorage.clear();
      console.clear();
      console.log('Created by ' + String.fromCodePoint(128568) + ' "https://gianko.com" ' + String.fromCodePoint(128561, 128640));

    } else {
      // No items
      this.router.navigate(['/login']);
      localStorage.clear();
      console.clear();
      console.log('Created by ' + String.fromCodePoint(128568) + ' "https://gianko.com" ' + String.fromCodePoint(128561, 128640));


    }
  }

}
