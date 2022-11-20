import {
	AfterViewInit,
	Component,
	ElementRef,
	EventEmitter,
	Input,
	OnInit,
	Output,
	TemplateRef,
	ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.less'],
})
export class SidenavComponent {
	// @Input() isDrawerOpened = false;

	// @Output() isDrawerOpenedChange = new EventEmitter<boolean>();

	@ViewChild(MatDrawer, { static: true })
	private matDrawerInstance!: MatDrawer;

	// @ViewChild(MatDrawer, {
	//   read: MatDrawer,
	//   static: true,
	// })
	// private matDrawerTest!: MatDrawer;

	// ngOnInit() {
	// this.matDrawerTest.toggle();
	// }

	// ngAfterViewInit() {
	// setTimeout(() => {
	//   this.matDrawerTest.toggle();
	// })
	// }

	togleDrawer() {
		this.matDrawerInstance.toggle();
		// console.log(this.matDrawerTest);
	}
}
