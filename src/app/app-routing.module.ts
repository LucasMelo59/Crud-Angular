import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductRemoveComponent } from './components/product/product-remove/product-remove.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "products",
  component: ProductCrudComponent
},
{
 path: "products/create",
component: ProductCreateComponent
},
{
  path: "products/update/:id",
 component: ProductUpdateComponent
 },
 {
  path: "products/remove/:id",
 component: ProductRemoveComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
