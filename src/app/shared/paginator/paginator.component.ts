import { NgForOfContext } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent<T> {
  @Input() productTemplate: TemplateRef<NgForOfContext<T>> | undefined;
  @Input() products: T[] | undefined;
}
