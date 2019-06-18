import { Component, OnInit } from '@angular/core';
import { product } from '../product';
//import { Product } from '../product';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private mobile: product = {
    name: "Iphone",
    company: "Apple",
    tags:"sasdf",
    imageId: "bb76"
  }



  ngOnInit() {
  }

}
