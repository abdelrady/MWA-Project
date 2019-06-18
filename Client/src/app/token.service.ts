import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  save(token: any) {
    localStorage.setItem("token", token);
  }

  get(){
    return localStorage.getItem("token");
  }

  getUserInfo(){
    let token = this.get();
    if(!token) return null;
    let payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  }
}
