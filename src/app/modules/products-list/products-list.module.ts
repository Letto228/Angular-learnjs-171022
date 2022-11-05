import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
	declarations: [ProductsListComponent, ProductCardComponent],
	imports: [CommonModule, MatCardModule, MatButtonModule],
	exports: [ProductsListComponent],
})
export class ProductsListModule {}
