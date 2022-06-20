import { Constants } from 'src/app/util/Constants';
import { Injectable } from '@angular/core';
import { WebStorageUtil } from 'src/app/util/WebStorageUtil';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  get isLoggedIn(): boolean {
    return WebStorageUtil.get(Constants.LOGGED_IN_KEY);
  }

  login() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, true);
    this.router.navigate(['home']);
  }

  logout() {
    WebStorageUtil.set(Constants.LOGGED_IN_KEY, false);
    this.router.navigate(['login']);
  }

}
