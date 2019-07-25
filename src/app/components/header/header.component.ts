import { RoutesDays } from './../../models/routesdays/Routesdays';

import { UserInfo } from './../../models/users/users';
import { LoginService } from './../../services/login.service';
import { Component, OnInit, Input } from '@angular/core';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoginService]
})

export class HeaderComponent implements OnInit {
  public roll = localStorage.getItem('roll');
  STORE = localStorage.getItem('store');
  username = localStorage.getItem('currentUser');
  public isAdmin: boolean;
  public menu: any;
  public route = JSON.parse(localStorage.getItem('route'));

  constructor(private _ls: LoginService) {


  }

  ngOnInit() {

    this.roll === 'EXT_SUC' ? this.isAdmin = true : this.isAdmin = false,

      this.isAdmin === true ?
        (
          Number(localStorage.getItem('consorcio')) === 40 ? (
            this.menu = [{ link: '/inventory', menu: 'Inventario' }]) :
            (
              this.menu = [
                { link: '/order', menu: 'Order' },
                { link: '/orders', menu: 'Orders' }
              ]
            )
        )
        :
        (
          localStorage.getItem('store') ? (
            Number(localStorage.getItem('consorcio')) === 40 ? (
              this.menu = [{ link: '/inventory', menu: 'Inventario' }]) :
              (
                this.menu = [
                  { link: '/coordination', menu: 'Coordination' }
                ]
              )
          ) :
            // SuperUser Access ILG people
            (
              this.menu = [
                { link: '/coordination', menu: 'Payless' },
                { link: '/inventory', menu: 'Tigo' }
              ]
            )
        );



  }



  logOut() {
    this._ls.getLogOut();
  }


}
