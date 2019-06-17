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
  productId;
  product: Product = { name: '', company: '', imageId: null };
  serverImagesUrl: String = environment.apiUrl + "/images/";

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    route.params.subscribe(p => {
      this.productId = p['id'];
      productService.getProductById(this.productId)
        .subscribe((data: any) => {
          // Bind data to UI
          if (data.success) {
            this.product = data.product;
          }
          else {
            // show error in UI
          }
        });
    });
  }



  ngOnInit() {
  }

}
