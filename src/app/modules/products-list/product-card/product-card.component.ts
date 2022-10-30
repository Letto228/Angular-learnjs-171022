import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;

	@Output() productBuy = new EventEmitter<object>();
    
    getFirstFoto() {
		return this.product?.images[0].url
	}

	onProductBuy() {
		this.productBuy.emit({ id: this.product?._id, name: this.product?.name })
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
