import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../Product';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {

   //private products: Product[] = [
  //   {
  //     name: "Iphone",
  //     company: "Apple",
  //     imageId: "bb76"
  //   },
  //   {
  //     name: "Iphone",
  //     company: "Apple",
  //     imageId: "bb76"
  //   },
  //   {
  //     name: "Iphone",
  //     company: "Apple",
  //     imageId: "bb76"
  //   }
  // ];
  isClicked: boolean = true;
  constructor(private productService: ProductsService, private router: Router) { }
  onClicked() {
    this.isClicked = !this.isClicked;
  }
  ngOnInit() {
    // this.getAllProducts();
  }
  //getAllProducts(): void {
  //   this.productService.getAllProducts().subscribe(data => {
  //     this.products = data;
  //   });
  // };

}
