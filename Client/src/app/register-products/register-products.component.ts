import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from "@angular/forms";

import {Router} from '@angular/router'
import { first } from 'rxjs/operators'

import { UsersService} from '../users.service'
import { user } from '../models';

@Component({
  templateUrl: './register-products.component.html'
})

export class RegisterComponet implements  OnInit {
    registerForm : FormGroup;
    loading = false;
    submitted = false;


  constructor(
    private  FormBuilder : FormBuilder,
    private router :Router,
    private userService :UsersService,
    // TODO: need add alert
  ){

  }


  ngOnInit(){
    this.registerForm = this.FormBuilder.group({
      firstName : ['',Validators.required],
      lastName :['',Validators.required],
      username :['',Validators.required],
      password :['', [Validators.required, Validators.minLength(6)]],
      email :['', [Validators.required, Validators.email]],
    });
  }


  get f() {return this.registerForm.controls}

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    this.loading  = true;
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
          data=>{
            // this.user = data;
              console.log("1");
            // this.router.navigate(['./login']);
            this.loading = false;
            // TODO: return home page
          },
          error=>{
            this.loading = false;
          }
        )
  }
}
