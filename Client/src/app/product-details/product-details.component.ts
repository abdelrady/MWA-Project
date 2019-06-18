import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
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
  private product: Product = {
    name: "",
    company: "",
    tags: "",
    imageId: null
  }



  ngOnInit() {
  }

}
