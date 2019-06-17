import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import {HttpClient} from '@angular/common/http';
import { user } from './models';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private Http : HttpClient){
    console.log(environment.apiUrl);
   }

   register(user : user){
      return this.Http.post(`${environment.apiUrl}/auth/signup`, user);
   }

   login(username: string, password: string) {
    return this.Http.post<any>(`${environment.apiUrl}/auth/login`, { username, password });
    }

   //    logout() {
   //    // remove user from local storage to log user out
   //    localStorage.removeItem('currentUser');
   //    this.currentUserSubject.next(null);
   //    }
}
