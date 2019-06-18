import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './services/token.service';
import { user } from "./models/user"

@Injectable({
  providedIn: 'root'
})
export class ValidUserGuard implements CanActivate {
  user: user;
  isAdmin;
  constructor(private tokenservice: TokenService) {
    this.user = this.tokenservice.getUserInfo();
    console.log(this.user);
    this.isAdmin =  this.user && this.user.isAdmin;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.isAdmin;
  }
}
