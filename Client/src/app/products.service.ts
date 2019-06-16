import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Product } from './Product'



@Injectable({ providedIn: 'root' })
export class ProductsService {

 

  // addProduct(product: Product){
  //   return this.http.post(this.baseurl + 'Products', product);
  // }

  // deleteProduct(id: string){
  //   return this.http.delete(this.baseurl + 'Products' + '/' + id);
  // }

  // updateProduct(product: Product){
  //   return this.http.put(this.baseurl + 'Products' + '/' + product._id, product);
  // }
  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:8080/";
  getAllProducts() {
    return this.http.get<Product[]>(this.baseurl + 'Products');
  }


}



