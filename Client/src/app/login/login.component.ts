import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UsersService} from '../users.service';
import { user } from '../models';
import { baseBean } from '../models'
import { CookieService } from 'ngx-cookie-service';



@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    time: number = 2*60*60*1000;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService : UsersService,
        private cookieService : CookieService
    ) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.userService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                (data: baseBean<user>) => {
                    if(data.success){
                        this.router.navigate(['./listproducts']);
                        this.cookieService.set("token",data.token,new Date(new Date().getTime() + this.time));
                        this.cookieService.set("userName",data.T.userName,new Date(new Date().getTime() + this.time));

                    }else{

                      //// TODO:  add error infor
                      this.loading = false;
                    }
                },
                error => {
                    this.loading = false;
                });
    }
}
