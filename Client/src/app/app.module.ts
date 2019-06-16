import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-products/add-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms'
import { ErrorComponent } from './error-page/error.component'
import { RegisterComponet} from './register-products/register-products.component'

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    AddProductComponent,
    ProductDetailsComponent,
    ErrorComponent,
    RegisterComponet,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
