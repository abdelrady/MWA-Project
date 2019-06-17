import { Component ,OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { FormBuilder } from '@angular/forms';
import {TokenService} from './token.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Client';
  searchForm;
  user;
  logout = false;
  login = false;
  constructor(private formBuilder: FormBuilder, private tokenService : TokenService){
    this.searchForm = formBuilder.group({
      'search': ['']
    });

  }

  ngOnInit(){
    this.user = this.tokenService.getUserInfo();
    if(this.user){
      console.log(this.user.username);
      //show userinfo
      this.logout = true;
    }else{
      this.login  = true;
    }
  }

  search(){

  }


}
