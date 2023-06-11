import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: TaskListComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'products/create',
    component: ProductFormComponent
  },
  { 
    path: 'products/edit/:id', component: ProductFormComponent 
  },
  // carts routes here
  {
    path: 'carts',
    component: CartComponent,
  },
  { 
    path: 'products/search/:id', component: CartComponent 
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
