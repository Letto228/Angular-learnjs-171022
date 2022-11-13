import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less'],
})
export class HeaderComponent {
	readonly imgSrc = '../../../favicon.ico';
	readonly iconWidth = 100;

	get iconStyle(): string {
		return `width: ${this.iconWidth}px`;
	}

	getSrc() {
		console.log('imgSrc');

		return this.imgSrc;
	}

	onMenuClick() {
		console.log('onMenuClick');
	}

	// onShareClick(event: Event) {
	onShareClick() {
		console.log('onShareClick');
		// event.stopPropagation();
	}
}
