import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';



@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(private http: HttpClient) { }
  baseurl: string = environment.apiUrl;

  searchProducts(searchTerm?: string) {
    var options = searchTerm ? {
      params: {
        q: searchTerm
      }/*,
      observe: 'response'*/
    } : {};
    return this.http.get<Product[]>(this.baseurl + '/Products/all', options);
  }

  getAllProducts() {
    return this.searchProducts();
  }

  getProductById(id: string) {
    return this.http.get<Product>(this.baseurl + '/Products' + '/' + id);
  }

  addProduct(product: Product) {
    return this.http.post(this.baseurl + '/Products', this.toFormData(product));
  }

  deleteProduct(id: string) {
    return this.http.delete(this.baseurl + '/Products' + '/' + id);
  }

  updateProduct(product: Product) {
    console.log(product)
    return this.http.put(this.baseurl + '/Products' + '/' + product._id, this.toFormData(product))
  }

  toFormData<T>(formValue: T) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }
}
