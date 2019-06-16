import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from "@angular/forms";

import {Router} from '@angular/router'
import {first} from 'rxjs/operators'

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

  ){

  }

  ngOnInit(){

  }
}
