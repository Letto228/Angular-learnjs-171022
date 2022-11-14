import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../shared/products/product.interface';
import { ProductsStoreService } from '../../shared/products/products-store.service';

@Component({
	selector: 'app-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
	readonly products$: Observable<IProduct[] | null> = this.productsStoreService.products$;
	constructor(private readonly productsStoreService: ProductsStoreService) {}

	ngOnInit() {
		this.productsStoreService.loadProducts();
	}

	trackBy(_index: number, product: IProduct): string {
		return product._id;
	}
}
