import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;

	@Output() productBuy = new EventEmitter<any>();
    
    getFirstFoto() {
		return this.product?.images[0].url
	}

	onProductBuy(event: Event) {
		event.stopPropagation();
		this.productBuy.emit({ this: this.product?._id })
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
