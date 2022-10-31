import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ProductsListModule } from 'src/app/modules/products-list/products-list.module';

@NgModule({
	declarations: [SidenavComponent],
	imports: [
		CommonModule,
		ProductsListModule,
		MatSidenavModule,
		MatButtonModule,
	],
	exports: [SidenavComponent],
})
export class SidenavModule {}
