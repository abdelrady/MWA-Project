import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
    console.log(environment.apiUrl);
   }
   
}

