import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  save(token: any) {
    localStorage.setItem("token", token);
    this.subscribers.forEach(callback => callback());
  }

  get() {
    return localStorage.getItem("token");
  }

  delete() {
    localStorage.removeItem("token");
    console.log(this.subscribers)
    this.subscribers.forEach(callback => callback());
  }

  getUserInfo() {
    let token = this.get();
    if (!token) return null;
    let payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  }

  subscribers = [];
  subscribeForChanges(callback) {
    this.subscribers.push(callback);
  }
}
