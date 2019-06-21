import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { environment } from 'src/environments/environment';
import { ProductsService } from 'src/app/services/products.service';
import { TokenService } from 'src/app/services/token.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {
  isAdmin: Boolean;
  products: Product[] = [];
  isClicked: boolean = true;
  serverImagesUrl: String = environment.apiUrl + "/images/";
  searchTerm : String = '';

  constructor(private fb : FormBuilder, private tokenservice : TokenService, private productService: ProductsService, private router: Router) { 
    let user = this.tokenservice.getUserInfo();
    this.isAdmin =  user && user.isAdmin;
  }

  onClicked(productId) {
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

  addNew() {
    this.router.navigate(["/addProduct/"]);
  }

  editProduct(productId) {
    this.router.navigate(["/editProduct/", productId]);
  }

  removeProduct(productId, index) {
    if (confirm("Are you sure you want to delete this item?")) {
      this.productService.deleteProduct(productId)
        .subscribe((data: any) => {
          if (data.success) {
            this.products.splice(index, 1);
          } else {
            // show error message
            alert("An error has occurred. Please try again later.");
          }
        }, err => alert("An error has occurred. Please try again later."));
    }
  }

  searchTermChanged($event){
    this.searchTerm = $event.target.value;
  }
}
