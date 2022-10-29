import { Component } from '@angular/core';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	readonly card = productMock;

	onBuyClick(event: Event) {
		console.log('onBuyClick');
		event.stopPropagation();
	}

	getFirstCardImgUrl(): string {
		return this.card.images[0].url;
	}

	getFirstCardImgStyleUrl(): string {
		return `url(${this.getFirstCardImgUrl()})`;
	}
}
