import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorComponent } from './components/error-page/error.component'
import { RegisterComponet } from './components/account/register-products/register-products.component'
import { ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { SearchComponent } from './components/product/search/search.component'
import { TokenInterceptor } from './token.interceptor';
import { LoginComponent } from './components/account/login/login.component';
import { LogoutComponent } from './components/account/logout/logout.component';
import { ValidUserGuard } from './valid.user.guard';
import { FileUploadComponent } from './components/product/file-upload/file-upload.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    ProductDetailsComponent,
    ErrorComponent,
    RegisterComponet,
    EditProductComponent,
    LoginComponent,
    LogoutComponent,
    FileUploadComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ProductsService, CookieService, ValidUserGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
