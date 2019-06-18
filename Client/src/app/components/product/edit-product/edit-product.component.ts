import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { requiredFileType } from 'src/app/upload-file-validators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId;
  product: Product;
  editForm;
  errorMsg;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private productService: ProductsService, private router: Router) {
    this.editForm = formBuilder.group({
      '_id': [''],
      'name': ['', Validators.required],
      'tags': [''],
      'description': ['', Validators.required],
      'quantity': ['', Validators.required],
      'price': ['', Validators.required],
      'imageId': [''],
      'company': ['', Validators.required],
      'image': new FormControl(null, [Validators.required, requiredFileType(['png', 'jpg', 'jpeg', 'bmp'])])
    });


    route.params.subscribe(p => {
      this.productId = p['id'];
      if (this.productId) {
        productService.getProductById(this.productId)
          .subscribe((data: any) => {
            // Bind data to UI
            if (data.success) {
              this.product = data.product;
              this.editForm.setValue({ ...this.product, image: null });
            }
            else {
              this.errorMsg = "error"
            }
          },
            error => {
              this.errorMsg = "Item with such id doesn't exist"
            });
      }
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.productId) {
      console.log("this.productId");
      // Update
      console.log(this.editForm.error);

      this.productService.updateProduct(this.editForm.value)
        .subscribe((data: any) => {
          if (data.success) {
            //redirect to homepage
            this.router.navigate(['']);
          }

        });
      ;
    }
    else {
      // Add product to database
      this.productService.addProduct(this.editForm.value)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['']);
        });

    }
  }

  hasError(field: string, error: string) {
    const control = this.editForm.get(field);
    return control.dirty && control.hasError(error);
  }

}

export function markAllAsDirty(form: FormGroup) {
  for (const control of Object.keys(form.controls)) {
    form.controls[control].markAsDirty();
  }
}
