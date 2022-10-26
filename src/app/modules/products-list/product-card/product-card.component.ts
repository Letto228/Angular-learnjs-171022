import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';
import { productMock } from 'src/app/shared/products/product.mock';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {

  readonly cardData: IProduct = productMock;

  constructor() { }

  get imagesWithoutFirst() {
    return this.cardData.images.slice(1,-1);
  }

  ngOnInit(): void {
  }

  addToCart(event: Event): void {
    console.log('Товар добавлен в корзину');
    event.stopPropagation();
  }

}
