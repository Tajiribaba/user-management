import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../interface/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private productService: ProductService,
    private router: Router) {

  }

  products!: Product[];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  deleteProduct(product: Product): void {
    this.productService.deleteProduct(product.id).subscribe(
      () => {
        alert("Product deleted successfully");
        this.getProducts();
      }

    )
  }


}
