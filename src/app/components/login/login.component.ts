
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

  constructor(private  _ls: LoginService) {

   }


login() {
  if (this.username && this.password) {
    this.data = this._ls.getLogin(this.username, this.password);
    this.alert = this._ls.alert;
   // this.data === undefined ? this.alert = true : ( this.data = this._ls.getLogin(this.username, this.password), this.alert = false);

  }
}

}
