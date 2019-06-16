import { Component, OnInit } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private mobile: product = {
    name: "Iphone",
    company: "Apple",
    imageId: "bb76"
  }

  constructor() { }

  ngOnInit() {
  }

}
