import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-products/add-products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';



const routes: Routes = [
  { path: "", redirectTo: "listproducts", pathMatch: 'full' },
  { path: "listproducts", component: ListProductsComponent },
  { path: "addProduct", component: AddProductComponent },
  {path: "editProduct", component: EditProductComponent },
  { path: "**", redirectTo: "error" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
