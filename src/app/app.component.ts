import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root', // <app-root></app-root>
	// div[class="root"] -> <div class="root"></div>
	// template: `
	// <h1>
	// 	Hello
	// </h1>
	// `,
	templateUrl: './app.component.html',
	// styles: ['h1 { color: #900; }'],
	styleUrls: ['./app.component.less'],
	// encapsulation: ViewEncapsulation.Emulated,
	// interpolation: ['{{', '}}'],
})
export class AppComponent {
	readonly title = 'Angular-learnjs-171022';
	// readonly window = window;

	// getTitle(): string {
	// 	return this.title;
	// }

	// getWindow(): Window {
	// 	return window;
	// }

	onKeydown(event: Event) {
		console.log('onKeydown', event);
	}

	onAppHeaderClick() {
		console.log('onAppHeaderClick');
	}
}
