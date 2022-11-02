import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/products/product.interface';
import { productMock } from '../../../shared/products/product.mock';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
	@Input() product: IProduct | undefined;
	@Output() productBuy = new EventEmitter<IProduct['_id'] | undefined>();
	@Output() productLike = new EventEmitter<IProduct['rating']>();

	getImageUrl() {
		return this.product?.images[0].url || '';
	}

	getPrice() {
		return this.product?.price || '-';
	}

	getFeedback() {
		return this.product?.feedbacksCount || '-';
	}

	onProductBuy(event: Event) {
		event.stopPropagation();
		this.productBuy.emit(this.product?._id);
	}

	likeProduct(event: Event) {
		this.productLike.emit(this.product?.rating);
	}

	isStarActive(starIndex: number): boolean {
		return Boolean(this.product && this.product.rating >= starIndex);
	}
}
