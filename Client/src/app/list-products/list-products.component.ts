import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { product } from '../product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {
  //products: Product[];
  private products: product[] = [
    {
      name: "Iphone",
      company: "Apple",
      imageId: "bb76"
    },
    {
      name: "Iphone",
      company: "Apple",
      imageId: "bb76"
    },
    {
      name: "Iphone",
      company: "Apple",
      imageId: "bb76"
    }
  ]
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  };
}
