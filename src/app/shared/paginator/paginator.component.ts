import { NgForOfContext } from '@angular/common';
import { Component, OnInit, Input, TemplateRef, ViewChild, ViewContainerRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent<T> implements OnInit {
  @Input() productTemplate: TemplateRef<NgForOfContext<T>> | undefined;
  @Input() products: T[] | undefined;

  constructor() { }

  ngOnInit(): void { }
}
