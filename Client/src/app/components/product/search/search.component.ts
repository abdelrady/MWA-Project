import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
import { ProductsService } from 'src/app/services/products.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-search',
  templateUrl: '../list-products/list-products.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  isAdmin: Boolean;
  products: Product[] = [];
  serverImagesUrl: String = environment.apiUrl + "/images/";
  searchTerm : String = '';

  constructor(private tokenservice: TokenService, private route: ActivatedRoute, private productsService: ProductsService) {
    let user = this.tokenservice.getUserInfo();
    this.isAdmin = user && user.isAdmin;
    route.queryParams.subscribe(query => {
      let searchTerm = query['q'];
      this.productsService.searchProducts(searchTerm)
        .subscribe((data: any) => {
          if (data.success) {
            this.products = data.products;
          } else {
            // show error message
          }
        });;
    })
  }

  ngOnInit() {
  }

  searchTermChanged($event){
    this.searchTerm = $event.target.value;
  }
}
