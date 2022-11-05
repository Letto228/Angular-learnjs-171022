import { Component, OnInit } from '@angular/core';
import { productMock } from 'src/app/shared/products/product.mock';
import { IProduct } from 'src/app/shared/products/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent {
  readonly product : IProduct = productMock;

  OnProductBuy(): void {
      console.log(("Buy"));
      
  }
}
