import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId;
  editForm;
  errorMsg;
  serverImagesUrl: string = environment.apiUrl + '/images/';

  product: Product = {
    name: '',
    tags: "",
    company: '',
    price: 0.0,
    description: '',
    imageId: null
  }


  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    route.params.subscribe((p: any) => {
      this.productId = p['id'];
      productService.getProductById(this.productId)
        .subscribe((data: any) => {
          // Bind data to UI
          if (data.success) {
            this.product = data.product;

          }
          else {
            this.errorMsg = "error"
          }
        },
          error => {
            this.errorMsg = "Item with such id doesn't exist"
          });
    });
  }

  ngOnInit() {
  }

}





