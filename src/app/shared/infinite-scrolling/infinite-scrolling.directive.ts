import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { LoadDirection } from './load-direction.enum';

const borderOffset = 100;

@Directive({
  selector: '[appInfiniteScrolling]'
})
export class InfiniteScrollingDirective {
  @HostListener('scroll')
  onScroll() {
    const element = this.el.nativeElement;
    const borderTopOffset = element.scrollTop; 
    const borderBottomOffset = element.scrollHeight - element.scrollTop - element.clientHeight; 

    if(borderTopOffset < borderOffset) {
      this.loadData.emit(LoadDirection.Top);

      return;
    }

    if(borderBottomOffset < borderOffset) {
      this.loadData.emit(LoadDirection.Bottom);

      return;
    }
  }

  @Output() loadData = new EventEmitter<LoadDirection>();

  constructor(private el: ElementRef) { }

}
