import { Component } from '@angular/core';
import { applicationConfigMock } from './shared/application-config/application-config.mock';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	// readonly title = 'Angular-learnjs-171022';
	readonly applicationConfig = applicationConfigMock;

	// isDrawerOpened = false;

	// onMenuClick() {
	// 	this.isDrawerOpened = !this.isDrawerOpened
	// }
}
