import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../interface/cart';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts!: Cart;
  private endPoint = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // get all carts
  getCarts(): Observable<Cart[]> {
    return  this.http.get<Cart[]>(`${this.endPoint}/carts`);
  }

  // get single cart
  getCart(id: string): Observable<Cart> {
    return  this.http.get<Cart>(`${this.endPoint}/carts/${id}`);
  }

  // add cart
  addCart(cart: Cart): Observable<Cart> {
    return  this.http.post<Cart>(`${this.endPoint}/carts/`, cart)
    .pipe(map((res: Cart) => {
      return res;
    }));
  }

  // update cart
  updateCart(id: string, cart: Cart): Observable<Cart> {
    return this.http.put<Cart>(`${this.endPoint}/carts/${id}`, cart);
  }

  // delete cart
  deleteCart(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.endPoint}/carts/${id}`);
  }
}
