import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    category: '',
    price: 0
  };
  isEditing: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.isEditing = true;
      this.productService.getProduct(Number(productId)).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  saveProduct(): void {
    if (this.isEditing) {
      this.productService.updateProduct(this.product).subscribe(
        () => {
          alert('Product updated successfully');
          this.router.navigate(['/products']);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.productService.createProduct(this.product).subscribe(
        () => {
          alert('Product created successfully');
          this.router.navigate(['/products']);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
