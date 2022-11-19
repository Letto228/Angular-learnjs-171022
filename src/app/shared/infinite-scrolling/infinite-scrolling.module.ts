import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollingDirective } from './infinite-scrolling.directive';



@NgModule({
  declarations: [
    InfiniteScrollingDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfiniteScrollingDirective
  ]
})
export class InfiniteScrollingModule { }
