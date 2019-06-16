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

   register(){
      return this.Http.post(`${environment.apiUrl}/users/register`, user);
   }

}
