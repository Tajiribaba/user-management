import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartFormComponent } from './cart/cart-form/cart-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TaskListComponent,
    ProductComponent,
    ProductFormComponent,
    CartComponent,
    CartFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
