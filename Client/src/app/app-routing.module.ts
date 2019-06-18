import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { RegisterComponet } from './components/account/register-products/register-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './components/product/list-products/list-products.component';

import { ErrorComponent } from './components/error-page/error.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { SearchComponent } from './components/product/search/search.component';
import { ValidUserGuard } from './valid.user.guard';
import { LoginComponent } from './components/account/login/login.component';
import { LogoutComponent } from './components/account/logout/logout.component';



const routes: Routes = [
  { path: "", redirectTo: "listproducts", pathMatch: 'full' },
  { path: "listproducts", component: ListProductsComponent },
  { path: "productDetails/:id", component: ProductDetailsComponent },
  { path: "error", component: ErrorComponent },
  { path: "signup", component: RegisterComponet },
  { path: "editProduct/:id", component: EditProductComponent/*, canActivate: [ValidUserGuard]*/ },
  { path: "addProduct", component: EditProductComponent/*, canActivate: [ValidUserGuard]*/ },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "register", component: RegisterComponet },
  { path: "search", component: SearchComponent },
  { path: "**", redirectTo: "error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
