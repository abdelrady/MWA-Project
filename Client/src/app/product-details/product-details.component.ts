import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //   productId;
  //   product: Product;
  //   editForm;
  //   errorMsg;
  //   private product: Product = {
  //     name: '',
  //     tags: "",
  //     company: '',
  //     price: 0.0,
  //     description: '',
  //     imageId: null
  //   }


  //   constructor(private route: ActivatedRoute, private productService: ProductsService) { }
  ngOnInit() {
  }
  //   route.params.subscribe(p: any => {
  //     this.productId = p['id'];
  //     productService.getProductById(this.productId)
  //       .subscribe((data: any) => {
  //         // Bind data to UI
  //         if (data.success) {
  //           this.product = data.product;

  //         }
  //         else {
  //           this.errorMsg = "error"
  //         }
  //       },
  //         error => {
  //           this.errorMsg = "Item with such id doesn't exist"
  //         });
  //   });
}





