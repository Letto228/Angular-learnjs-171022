import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productMock } from '../../shared/products/product.mock';
import { productsMock } from '../../shared/products/products.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent implements OnInit {
	product: IProduct | undefined = undefined;
	products: IProduct[] | undefined = undefined;

	ngOnInit() {
		setTimeout(() => {
			this.product = productMock;
			this.products = productsMock;
		}, 3000);
	}
}
