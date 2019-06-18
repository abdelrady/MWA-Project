import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { product } from 'src/app/product';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: '../../../list-products/list-products.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products : product[] = [];
  serverImagesUrl : String = environment.apiUrl + "/images/";

  constructor(private route : ActivatedRoute, private productsService : ProductsService) {
    route.queryParams.subscribe(query=>{
        let searchTerm = query['q'];
        this.productsService.searchProducts(searchTerm)
        .subscribe((data : any) => {
          if(data.success){
            this.products = data.products;
          }else{
            // show error message
          }
        });;
    })
   }

  ngOnInit() {
  }

}
