
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})


export class LoginComponent {

  public password: string;
  public username: string;
  public alert: boolean;
  public userinfo: any;
  public data: any;
  error: string;

  constructor(private _ls: LoginService) {

  }


  async login() {

    if (this.username && this.password) {
      this.data = await this._ls.getLogin(this.username, this.password)
      var error = JSON.parse(localStorage.getItem('error'));
      // console.log(error)
    }
    if (error) {
      this.alert = error.alert;
      this.error = error.data;
    }

  }

}
