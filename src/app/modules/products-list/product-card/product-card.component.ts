import { Component, OnInit } from '@angular/core';
import { productMock } from '../../../shared/products/product.mock';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {

  constructor() { }

  readonly product = productMock;

  onAddShoppingCart(event: Event) {
		event.stopPropagation();
		console.log('addShoppingCart');
	}

  ngOnInit(): void {
  }

}
