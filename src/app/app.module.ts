import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/header/header.module';
import { ProductsListModule } from './modules/products-list/products-list.module';
import { SidenavModule } from './components/sidenav/sidenav.module';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { NgClassModule } from './shared/ng-class/ng-class.module';
import { InsertShadowModule } from './shared/insert-shadow/insert-shadow.module';
import { InfiniteScrollingModule } from './shared/infinite-scrolling/infinite-scrolling.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HeaderModule,
		ProductsListModule,
		SidenavModule,
		MatListModule,
		MatInputModule,
		NgClassModule,
		InsertShadowModule,
		InfiniteScrollingModule
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
