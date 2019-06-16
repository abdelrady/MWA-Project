import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
<<<<<<< HEAD
import { AddProductsComponent } from './add-products/add-products.component';
=======
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 4a4988b1e80fb26b14302ba875c43489fedf9e5b

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
<<<<<<< HEAD
    AddProductsComponent
=======
    ProductDetailsComponent
>>>>>>> 4a4988b1e80fb26b14302ba875c43489fedf9e5b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
