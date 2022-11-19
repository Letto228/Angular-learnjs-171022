import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appInfiniteScrolling]'
})
export class InfiniteScrollingDirective {
  @HostListener('scroll')
  onScroll() {
    const element = this.el.nativeElement;
    const borderTopOffset = element.scrollTop; 
    const borderBottomOffset = element.scrollHeight - element.scrollTop - element.clientHeight; 

    if(borderTopOffset < 100) {
      this.loadData.emit('top');
    }

    if(borderBottomOffset < 100) {
      this.loadData.emit('bottom');
    }
  }

  @Output() loadData = new EventEmitter<string>();

  constructor(private el: ElementRef) { }

}
