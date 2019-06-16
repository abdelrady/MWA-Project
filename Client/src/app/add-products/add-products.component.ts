import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { FormGroup } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'
import { ProductsService } from '../products.service';
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private productService: ProductsService) { }

  addForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      company: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted = true;

    if(this.addForm.valid){
      this.productService.addProduct(this.addForm.value)
      .subscribe( data => {
        console.log(data);
        this.router.navigate(['']);
      });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }

}
