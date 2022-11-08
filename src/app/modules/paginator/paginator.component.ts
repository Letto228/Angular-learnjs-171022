import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { IProduct } from 'src/app/shared/products/product.interface';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.less']
})
export class PaginatorComponent implements OnInit {
  @Input() productListTemplate: TemplateRef<IProduct[]> | undefined; 
  pageSizeArray: string[] = ['5', '10', '20'];
	selectedPageSize: string = '5';

  constructor() { }

  ngOnInit(): void {
    console.log(this.productListTemplate);
  }
}
