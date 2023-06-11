import { Component, OnInit } from '@angular/core';
import { Cart } from '../interface/cart';
import { CartService } from '../service/cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  carts!: Cart[];
  cartSingle!: Cart;

  constructor(private _cartServices: CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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

  deleteCart(cart: Cart) {
    this._cartServices.deleteCart(cart.id).subscribe({
      next: () => {
        alert("Cart deleted successfuly");
        this.displayCarts();
      },
      error: console.log
    })
  }

  searchCart(cart: HTMLInputElement) {
    // console.log(cart);
    const myCart = cart.value;
    this._cartServices.getCart(myCart).subscribe({
      next: (cart) => {
        this.cartSingle = cart;
        console.log(this.cartSingle);        
      },
      error: (err) => {
        if(err.status == 404) {
          
        }
        // console.log(err.status); // 404 not found
      }
    })
  }

  openCartModal() {
    const openCart = document.getElementById('addCartModal');

    console.log(openCart);
    

    if(openCart != null) {
      openCart.style.display = 'block';
    }
  }
  
}
