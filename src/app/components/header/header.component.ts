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
  public roll
  STORE = localStorage.getItem('store');
  username = localStorage.getItem('currentUser');
  public isAdmin: boolean;
  public menu: any;
  public route = JSON.parse(localStorage.getItem('route'));
  public country: string;

  constructor(private _ls: LoginService) {
    this.country = localStorage.getItem("country");
    this.roll = localStorage.getItem('roll');
    this.roll === 'INT' ? this.isAdmin = true : this.isAdmin = false
  }

  ngOnInit() {

    this.getmenu();



  }

  async getmenu() {
    const consorcio = localStorage.getItem('consorcio')
    switch (this.country) {
      case ('CRC'):
        switch (this.isAdmin) {
          case true:
            // SuperUser Access ILG people
            this.menu = [
              { link: '/coordination', menu: 'Payless' },
              { link: '/payless-kpi', menu: 'KPI Payless' },
              { link: '/inventory', menu: 'Invetario_Tigo' },
              { link: '/InvGeneralReport', menu: 'Inventario_General' },
              { link: '/movements', menu: 'Movimientos' },
              { link: '/fefostock', menu: 'FEFO' }
            ]
            break;
          case false:
            switch (consorcio) {
              case '40':
                switch (this.roll) {
                  case 'EXT_SUC':
                    this.menu = [{ link: '/inventory', menu: 'Inventario' }]
                    break;
                  case 'EXT_CON':
                    this.menu = [{ link: '/inventory', menu: 'Inventario(Suc/Sub)' }, { link: '/InvGeneralReport', menu: 'Inventario General' }]
                    break;
                }
                break;
              case '32':
                switch (this.roll) {
                  case 'EXT_SUC':
                    this.menu = [
                      { link: '/order', menu: 'Orden' },
                      { link: '/orders', menu: 'Ordenes' }
                    ]
                    break;
                  case 'EXT_CON':
                    this.menu = [
                      { link: '/coordination', menu: 'Coordination' },
                      { link: '/payless-kpi', menu: 'KPIs' }
                    ]
                    break;
                }
                break;
              default:
                switch (this.roll) {
                  case 'EXT_SUC':
                    this.menu = [{ link: '/InvGeneralReport', menu: 'Inventarios ' }, { link: '/fefostock', menu: 'FEFO' }]
                    break;
                  case 'EXT_CON':
                    this.menu = [{ link: '/InvGeneralReport', menu: 'Inventario ' }, { link: '/fefostock', menu: 'FEFO' }]
                    break;
                }
            }

        }
        break;
      case ('PTY'):
        this.menu = [{ link: '/InvGeneralReport', menu: 'Inventario' }]
        break;
    }

  }

  logOut() {
    this._ls.getLogOut();
  }


}
