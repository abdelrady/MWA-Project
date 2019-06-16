import { AddProductComponent } from './add-products/add-products.component';
import { RegisterComponet } from './register-products/register-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { ErrorComponent } from './error-page/error.component';

const routes: Routes = [
  { path: "", redirectTo: "listproducts", pathMatch: 'full' },
  { path: "listproducts", component: ListProductsComponent },
  { path: "addProduct", component: AddProductComponent },
  { path: "error", component: ErrorComponent },
  { path : "register" ,component : RegisterComponet},
  { path: "**", redirectTo: "error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
