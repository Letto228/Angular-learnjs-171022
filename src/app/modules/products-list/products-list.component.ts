import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../shared/products/product.interface';
import { productMock } from '../../shared/products/product.mock';
import { productsMock } from 'src/app/shared/products/products.mock';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
})
export class ProductsListComponent implements OnInit {
	products: IProduct[] | undefined = undefined;

	ngOnInit() {
		setTimeout(() => {
			this.products = productsMock;
		}, 3000);
	}
}
