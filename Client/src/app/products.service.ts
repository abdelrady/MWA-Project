import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { product } from './product'



@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) { }
  baseurl: string = environment.apiUrl;

  getAllProducts() {
    return this.http.get<Product[]>(this.baseurl + 'Products');
  }

<<<<<<< HEAD
  getProductById(id: string) {
    return this.http.get<Product>(this.baseurl + 'Products' + '/' + id);
  }

  addProduct(product: Product) {
=======


  addProduct(product: product){
>>>>>>> 1e832e623ac24402b0f23d9b72c6ef364611690d
    return this.http.post(this.baseurl + 'Products', product);
  }

  // deleteProduct(id: string){
  //   return this.http.delete(this.baseurl + 'Products' + '/' + id);
  // }

  // updateProduct(product: Product){
  //   return this.http.put(this.baseurl + 'Products' + '/' + product._id, product);
  // }
<<<<<<< HEAD
=======
  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:8080/";
  getAllProducts() {
    return this.http.get<product[]>(this.baseurl + 'Products');
  }

>>>>>>> 1e832e623ac24402b0f23d9b72c6ef364611690d

}
