import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product'


@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(private http: HttpClient) { }
  baseurl: string = "http://localhost:8080/";
  getAllProducts() {
    return this.http.get<Product[]>(this.baseurl + 'Products');
  }


}



