import { Component } from '@angular/core';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent {
	addToCart(): void {
    console.log('Клик по карточке');
  }
}
