import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

  get isLoggedIn() {
    return true;
  }

  get isAdmin() {
    return false;
  }

}
