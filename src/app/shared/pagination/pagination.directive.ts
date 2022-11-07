import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';

interface IPaginationContext<T> {
	$implicit: T[];
	index: number;
	appPagination: T[][];
  elementNum: number;
	next: () => void;
	back: () => void;
}

@Directive({
  selector: '[appPagination]'
})
export class PaginationDirective<T> implements OnInit{
  @Input() set appPagination(items: T[] | undefined) {
    console.log('вот массив из компонентов', items);
    
    if (!items?.length) {
      this.viewContainer.clear();
      return
    }
    
    while (items.length) {
      this.mas.push(items.splice(0, this.elem));
    }
    console.log('новый массив', this.mas);

  }
  @Input() set elementPage(element: number | undefined) {
    console.log('а вот pageNum', element);
    
    if (!element) {
      this.elem = 0;
      return
    }
    
    this.elem = element;
  }

  private mas: T[][] = [];
  private elem: number = 0;

  private readonly currentIndex$ = new BehaviorSubject<number>(0);
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<IPaginationContext<T>>,
  ) {}

  ngOnInit() {
    this.listenCurrentIndexChange();
  }

  private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(currentIndex => this.getCurrentContext(currentIndex)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				console.log(context);
				this.viewContainer.clear();
				this.viewContainer.createEmbeddedView(this.template, context);
			});
	}

  private getCurrentContext(currentIndex: number): IPaginationContext<T> {
		return {
			$implicit: this.mas[currentIndex],
			index: currentIndex,
			appPagination: this.mas,
      elementNum: this.elem,
			next: () => {
				this.next();
			},
			back: this.back.bind(this),
		};
	}

  private next() {
		const nextIndex = this.currentIndex$.value + 1;

		this.currentIndex$.next(nextIndex < this.mas.length ? nextIndex : 0);
	}

	private back() {
		const previosIndex = this.currentIndex$.value - 1;

		this.currentIndex$.next(previosIndex >= 0 ? previosIndex : this.mas.length - 1);
	}
}
