import { Component } from '@angular/core';
import { productMock } from '../../shared/products/product.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	readonly card = productMock;

  onAddToCard(event: Event) {
    event.stopPropagation();
    console.log('Click');
  }
}
