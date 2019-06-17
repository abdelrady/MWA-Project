import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {

  private products: Product[] = [];
  isClicked: boolean = true;
  serverImagesUrl: String = environment.apiUrl + "/images/";

  constructor(private productService: ProductsService, private router: Router) { }

  onClicked(productId) {
    //this.isClicked = !this.isClicked;
    this.router.navigate(["/productDetails/" + productId]);
  }
  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      if (data.success) {
        this.products = data.products;
      } else {
        // show error message
      }
    });
  };

}
