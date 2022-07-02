import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _ls: LoginService, private _router: Router) { }

  canActivate(): boolean {
    if (this._ls.currentUser()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }


}
