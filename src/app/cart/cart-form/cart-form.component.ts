import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cart } from 'src/app/interface/cart';
import { CartService } from 'src/app/service/cart.service';
import { CartComponent } from '../cart.component';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent implements OnInit { 

  formValues!: FormGroup;
  cart: Cart = {
    id: 0,
    userId: 0,
    date: new Date(),
    products: {
      productId: 0,
      quantity: 0
    }
  };

  @Output() carts = new EventEmitter<Cart[]>();

  constructor(private _cartServices: CartService, private formBuilder: FormBuilder, private allCarts: CartComponent) {}

  ngOnInit(): void {
    this.formValues = this.formBuilder.group({
      userId: [''],
      date: [''],
      productId: [''],
      quantity: ['']
    });
  }

  addToCart() {
    this.cart.userId = this.formValues.value.userId;
    this.cart.date = this.formValues.value.date;
    this.cart.products.productId = this.formValues.value.productId;
    this.cart.products.quantity = this.formValues.value.quantity;

    this._cartServices.addCart(this.cart)
    .subscribe({
      next: (res) => {
        alert("Cart added successfuly");
        this.closeCartModal();
        this.allCarts.displayCarts();
      },
      error: (err) => {
        console.log(err);
        alert("Something went wrong");
      }
    });
    // console.log(this.cart);  

  }

  closeCartModal() {
    const openCart = document.getElementById('addCartModal');

    if(openCart != null) {
      openCart.style.display = 'none';
    }
    // this.formValues.reset();
    this.displayCarts();
  }

  closeEditCartModal() {
    const openCart = document.getElementById('editCartModal');

    if(openCart != null) {
      openCart.style.display = 'none';
    }
    this.formValues.reset();
    this.displayCarts();
  }

  // get Carts
  displayCarts(): void {
    this._cartServices.getCarts().subscribe({
      next: (carts) => {

        this.carts.emit(carts);
      },
      error: console.log
    })
  }

  openEditCartModal(row: Cart) {
    const openCart = document.getElementById('editCartModal');    

    if(openCart != null) {
      openCart.style.display = 'block';
    }
    this.onEdit(row);
  }

  // Update Cart
  onEdit(row: any) {
    // console.log(row);
    
    this.formValues.controls['userId'].setValue(row.userId);
    this.formValues.controls['date'].setValue(row.date);
    this.formValues.controls['productId'].setValue(row.products.productId);
    this.formValues.controls['quantity'].setValue(row.products.quantity);
  }

}
