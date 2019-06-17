import { EditProductComponent } from './edit-product/edit-product.component';
import { RegisterComponet } from './register-products/register-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';

import { ErrorComponent } from './error-page/error.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
 import { LoginComponent } from './account/login/login.component';
import { SearchComponent } from './components/product/search/search.component';



const routes: Routes = [
  { path: "", redirectTo: "listproducts", pathMatch: 'full' },
  { path: "listproducts", component: ListProductsComponent },
  { path: "productDetails/:id", component: ProductDetailsComponent },
  { path: "error", component: ErrorComponent },
  { path: "signup", component: RegisterComponet },
  { path: "editProduct/:id", component: EditProductComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponet },
  { path: "editProduct", component: EditProductComponent },
  { path: "search", component: SearchComponent },
  { path: "**", redirectTo: "error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
