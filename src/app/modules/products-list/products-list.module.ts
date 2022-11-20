import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgIfModule } from '../../shared/ng-if/ng-if.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarouselModule } from '../../shared/carousel/carousel.module';
import { PaginationModule } from '../../shared/pagination/pagination.module';
import { ToJsonModule } from '../../shared/to-json/to-json.module';
import { ProductsStoreService } from '../../shared/products/products-store.service';
import { FilterByParamModule } from 'src/app/shared/filter-by-param/filter-by-param.module';

@NgModule({
	declarations: [ProductsListComponent, ProductCardComponent],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		NgIfModule,
		MatProgressSpinnerModule,
		CarouselModule,
		PaginationModule,
		ToJsonModule,
		MatInputModule,
		FilterByParamModule
	],
	// providers: [
	// 	{
	// 		provide: ProductsStoreService,
	// 		useValue: {},
	// 	}
	// ],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
