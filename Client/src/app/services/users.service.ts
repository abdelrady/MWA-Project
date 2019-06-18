import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { user } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private Http: HttpClient, private tokenService: TokenService) {
    console.log(environment.apiUrl);
  }

  register(user: user) {
    return this.Http.post(`${environment.apiUrl}/auth/signup`, user);
  }

  login2(loginInfo) {
    return new Promise(async (resolve, reject) => {
      this.Http.post(`${environment.apiUrl}/auth/login`, loginInfo)
        .subscribe(async (data: any) => {
          if (data.success) {
            await this.tokenService.save(data.token);
            resolve(data);
          }
          else reject("Invalid Info supplied.");
        }, err => reject(err));
    })
  }
  login(username: string, password: string) {
    return this.Http.post<any>(`${environment.apiUrl}/auth/login`, { username, password });
  }

  logout() {
    // remove user from local storage to log user out
    return this.tokenService.delete();
  }

}
