import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { FormBuilder } from '@angular/forms';
import {TokenService} from './token.service'
import { user }   from './models/user'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Client';
  searchForm;
  user : user;
  logout = false;
  login = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private tokenService: TokenService) {
    this.searchForm = formBuilder.group({
      'search': ['']
    });

  }

  ngOnInit() {
    this.user = this.tokenService.getUserInfo();
    if (this.user) {
      console.log(this.user.firstName);
      //show userinfo
      this.logout = true;
    } else {
      this.login = true;
    }
  }

  search() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchForm.value.search } })
  }

}
