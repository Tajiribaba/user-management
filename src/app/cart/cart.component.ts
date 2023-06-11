import { Component, OnInit } from '@angular/core';
import { Cart } from '../interface/cart';
import { CartService } from '../service/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartFormComponent } from './cart-form/cart-form.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts!: Cart[];
  cartSingle!: Cart;

  // carts = new EventEmitter<Cart[]>();

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

  constructor(private _cartServices: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValues = this.formBuilder.group({
      userId: [''],
      date: [''],
      productId: [''],
      quantity: ['']
    });
    this.displayCarts();
  }

  displayCarts(): void {
    this._cartServices.getCarts().subscribe({
      next: (carts) => {
        this.carts = carts;
      },
      error: console.log
    })
  }

  // getACart(cart): void {}

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
        this.displayCarts();
      },
      error: (err) => {
        console.log(err);
        alert("Something went wrong");
      }
    });
    // console.log(this.cart);  

  }

  // Delete Cart
  deleteCart(cart: Cart) {
    this._cartServices.deleteCart(cart.id).subscribe({
      next: () => {
        alert("Cart deleted successfuly");
        this.displayCarts();
      },
      error: console.log
    })
  }

  // Get a single Cart
  searchCart(cart: HTMLInputElement) {
    // console.log(cart);
    const myCart = cart.value;
    this._cartServices.getCart(myCart).subscribe({
      next: (cart) => {
        this.cartSingle = cart;
        console.log(this.cartSingle);        
      },
      error: (err) => {
        if(err.status == 404) {}
      }
    })
  }

  updateCart() {    
    this.cart.userId = this.formValues.value.userId;
    this.cart.date = this.formValues.value.date;
    this.cart.products.productId = this.formValues.value.productId;
    this.cart.products.quantity = this.formValues.value.quantity;

    this._cartServices.updateCart(this.cart.id, this.cart)
    .subscribe({
      next: (res) => {
        alert("Cart updated successfuly");
        this.closeEditCartModal();
        this.displayCarts();
      },
      error: (err) => {
        console.log(err);
        alert("Something went wrong");
      }
    });
  }

  // Modal logics
  openCartModal() {
    const openCart = document.getElementById('addCartModal');

    console.log(openCart);
    

    if(openCart != null) {
      openCart.style.display = 'block';
    }
  }

  closeCartModal() {
    const openCart = document.getElementById('addCartModal');

    if(openCart != null) {
      openCart.style.display = 'none';
    }
    // this.formValues.reset();
    this.displayCarts();
  }

  openEditCartModal(row: Cart) {
    const openCart = document.getElementById('editCartModal');    

    if(openCart != null) {
      openCart.style.display = 'block';
    }
    this.cart.id = row.id;
    this.onOpenEditModal(row);
  }

  // Update Cart
  onOpenEditModal(row: any) {
    // console.log(row);
    
    this.formValues.controls['userId'].setValue(row.userId);
    this.formValues.controls['date'].setValue(row.date);
    this.formValues.controls['productId'].setValue(row.products.productId);
    this.formValues.controls['quantity'].setValue(row.products.quantity);
  }

  closeEditCartModal() {
    const openCart = document.getElementById('editCartModal');

    if(openCart != null) {
      openCart.style.display = 'none';
    }
    this.formValues.reset();
    this.displayCarts();
  }
  
}
