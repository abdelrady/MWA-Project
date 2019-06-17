import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/token.service';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage;
  alerts = [];
  loading = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private tokenService: TokenService, private userService: UsersService) {
    this.loginForm = formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      'password': ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  login() {
    if (!this.loginForm.errors) {
      this.loading = true;
      this.userService.login2(this.loginForm.value)
        .then((data) => {
          this.loading = false;
          this.router.navigate(['/listproducts'])
        })
        .catch(err => {
          this.loading = false;
          this.alerts.push({
            type: 'danger',
            message: "Invalid credentials",
          });
          console.log(err);
        });
    }
  }
  
  close(alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
}
