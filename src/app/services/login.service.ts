import { ApistockService } from 'src/app/services/apistock.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { UserInfo } from './../models/users/users';
import { environment } from 'src/environments/environment.prod';
import { userInfo } from 'os';


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
  public alert = false;
  private store: string;
  public body: any;
  public isAdmin: boolean;
  public menu: any;
  public roll: any;
  public route: any;
  public consorcio: string;
  public country: string;
  dataCollect: any;
  private ENV = environment
  private CRC = this.SERVER + this.API_URL + this.ENV.CRC + this.ENV.TOKEN
  private PTY = this.SERVER + this.API_URL + this.ENV.PTY + this.ENV.TOKEN
  private PP = this.SERVER + this.API_URL + this.ENV.PP + this.ENV.TOKEN
  private NPP = this.SERVER + this.API_URL + this.ENV.NPP + this.ENV.TOKEN
  private TEST = this.SERVER + this.API_URL + this.ENV.TEST + this.ENV.TOKEN

  errorMsg: string;

  ngOnInit() {



  }

  constructor(private http: HttpClient, private _stock: ApistockService, private router: Router) {
    this.store = null;
    sessionStorage.removeItem('error')
  }

  getLogin(username, password) {
    this.body = {
      EMAIL: username,
      CLAVE: password,
      NOMBRE: null,
      APELLIDO: null,
      TIPO: null
    };

    const headers = { headers: { 'Content-Type': 'application/json; charset=utf-8' } };

    this.http.post(this.SERVER + this.API_URL + 'login', this.body, headers)
      .subscribe(
        (data: any) => {
          if (data != null) {
            this.alert = false;
            this.username = data.Data.EMAIL;
            this.store = data.Data.CODIGOSUCURSAL;
            this.roll = data.Data.TIPO;
            this.consorcio = data.Data.CODIGOCONSORCIO;
            this.country = data.Country;

            localStorage.clear();
            localStorage.setItem('currentUser', this.username);
            localStorage.setItem('roll', this.roll);
            localStorage.setItem('consorcio', this.consorcio);
            localStorage.setItem('country', this.country);

            if (this.country === "CRC") {
              switch (Number(this.consorcio)) {
                case 32:
                  switch (this.roll) {
                    case 'EXT_SUC':
                      localStorage.setItem('store', this.store);
                      this.getRoute(this.store).subscribe(rou => {
                        this.route = rou,
                          localStorage.setItem('route', JSON.stringify(this.route));
                        location.reload();
                        this._stock.getStoreStock(this.store).subscribe(stock => {
                          localStorage.setItem('stock', JSON.stringify(stock));
                        });
                      })
                      this.router.navigate(['/order']);
                      break;
                    case 'EXT_CON':
                      this.router.navigate(['/coordination']);
                      break;
                  }
                  break;
                case 40:
                  this.router.navigate(['/inventory']);
                  break;
                default:
                  this.router.navigate(['/InvGeneralReport']);
                  break;
              }
            }
            else if (this.country === "PTY") {
              switch (Number(this.consorcio)) {
                case 40:
                  //   this.roll === 'INT' ? (console.log('soy admin ILG')) : (console.log('SOY' + this.roll));
                  this.router.navigate(['/InvGeneralReport']);
                  break;
                case 1:
                  switch (this.roll) {
                    case 'EXT_SUC':
                      this.router.navigate(['/job-requests']);
                      break;
                    case 'EXT_SUC':
                      this.router.navigate(['/InvGeneralReport']);
                      break;
                  }
                  break;
                default:
                  this.router.navigate(['/InvGeneralReport']);
                  break;
              }
            }
          }
          else {


          }
          // console.log('entro')
          this.dataCollect = { 'alert': this.alert }
          localStorage.removeItem('error')
          return data;
        },
        error => {
          //  console.error(error);
          this.alert = true;
          this.dataCollect = { 'alert': this.alert, 'data': error.error.Message };
          localStorage.setItem('error', JSON.stringify(this.dataCollect))
        }
      );



  }

  getRoute(store) {
    //  console.log(this.store);
    return this.http.get(this.PP + this.ENV.ROUTESSTORE + store);
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
