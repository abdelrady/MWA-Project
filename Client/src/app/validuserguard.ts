import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { user } from "./models/user"

export class ValidUserGuard implements CanActivate{
  user :user;
  admin ;
  constructor(private tokenservice: TokenService){
    this.user = this.tokenservice.getUserInfo();
    this.admin =  this.user.admin;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {

    return this.admin;
  }
}
