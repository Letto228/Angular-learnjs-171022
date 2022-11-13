//import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	//} implements OnInit {

	// constructor() { }

	// ngOnInit(): void {
	// }

	readonly product = productMock;

	onProductBuy(event: Event) {
		event.stopPropagation();

		console.log('Buy');
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
