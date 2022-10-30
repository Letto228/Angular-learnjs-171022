import { Component } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	readonly productCard = productMock;

	onProductBuy(product: object) {
		console.log('Хотят купить - ', product);
	}
}
