import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { product } from './product'



@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) { }
  baseurl: string = environment.apiUrl;

  getAllProducts() {
    return this.http.get<product[]>(this.baseurl + '/Products');
  }

  getProductById(id: string) {
    return this.http.get<product>(this.baseurl + '/Products' + '/' + id);
  }

  addProduct(product: product) {
    return this.http.post(this.baseurl + '/Products', product);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.baseurl + '/Products' + '/' + id);
  }

  updateProduct(product: product) {
    return this.http.put(this.baseurl + '/Products' + '/' + product._id, product);
  }

}
