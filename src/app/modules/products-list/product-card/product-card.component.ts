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

	getCardIcon(num: number, url: string = '') {
		if (url == 'url') {
			console.log('url('+this.card.images[num].url+')'); 
			return 'url('+this.card.images[num].url+')'
		} else {
			console.log(this.card.images[num].url) 
			return this.card.images[num].url
		}	
	}
}
