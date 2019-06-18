import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  
  constructor(private router: Router, private tokenService : TokenService, private userService: UsersService) {
  
  }

  ngOnInit() {
    this.tokenService.delete();
    // window.location.reload();
  }
}
