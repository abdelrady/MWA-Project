import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { product } from '../product';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId;
  product: product;
  editForm;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private productService: ProductsService) {
    this.editForm = formBuilder.group({
      '_id': [''],
      'name': ['', Validators.required],
      'tags': [''],
      'description': ['', Validators.required],
      'quantity': ['', Validators.required],
      'price': ['', Validators.required],
      'imageId': [''],
      'company': ['', Validators.required]
    });

    route.params.subscribe(p => {
      this.productId = p['id'];
      productService.getProductById(this.productId)
        .subscribe((data: any) => {
          // Bind data to UI
          if (data.success) {
            this.product = data.product;
            this.editForm.setValue(this.product);
          }
          else {
            // show error in UI
          }
        });
    });
  }


  ngOnInit() {
  }

  onSubmit() {
    if (this.productId) {
      // Update
    }
    else {
      // Add
    }

  }
}
