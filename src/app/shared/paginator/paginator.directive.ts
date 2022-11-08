import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';

export interface IPaginatorContext<T> {
  $implicit: T[],
  index: number;
  pageSize: number;
	// appCarousel: Array<T>;
	next: () => void;
	back: () => void;
}

@Directive({
  selector: '[appPaginator]'
})
export class PaginatorDirective<T>{
  @Input() set appPaginator(items: T[] | undefined) {
		if (!items?.length) {
			this.viewContainer.clear();

			return;
		}

		this.items = items;

		this.currentPaginatorIndex$.next(1);
	}

  private items: T[] = [];

	private readonly currentPaginatorIndex$ = new BehaviorSubject<number>(0);
	private readonly currentPageSize$ = new BehaviorSubject<number>(5);
	private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<IPaginatorContext<T>>,
  ) { }

  

  ngOnInit() {
    this.listenCurrentIndexChange();
    this.listenCurrentPageSizeChange();
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private listenCurrentIndexChange() {
		this.currentPaginatorIndex$
			.pipe(
				map(currentIndex => this.getPaginatorContext(currentIndex, this.currentPageSize$.value)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				console.log(context);
				this.viewContainer.clear();
				this.viewContainer.createEmbeddedView(this.template, context);
			});
	}

  private listenCurrentPageSizeChange() {
		this.currentPageSize$
			.pipe(
				map(pageSize => this.getPaginatorContext(this.currentPaginatorIndex$.value, pageSize)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				console.log(context);
				this.viewContainer.clear();
				this.viewContainer.createEmbeddedView(this.template, context);
			});
	}

	// private getCurrentContext(currentIndex: number): ICarouselContext<T> {
	// 	return {
	// 		$implicit: this.items[currentIndex],
	// 		index: currentIndex,
	// 		appCarousel: this.items,
	// 		next: () => {
	// 			this.next();
	// 		},
	// 		back: this.back.bind(this),
	// 	};
	// }

  private getPaginatorContext(currentIndex: number, currentPageSize: number): IPaginatorContext<T> {
    const startIndex = currentPageSize*(currentIndex - 1);
    const endIndex = currentPageSize*currentIndex;
		
    return {
      $implicit: this.items.slice(startIndex, endIndex),
      index: currentIndex,
      pageSize: currentPageSize,
      // appCarousel: this.items,
      next: () => {
        this.next();
      },
      back: this.back.bind(this),
    }
  }

	private next() {
    const currentPaginatorIndex = this.currentPaginatorIndex$.value;
    const endProductNumber = currentPaginatorIndex * this.currentPageSize$.value;
		const nextPaginatorIndex = endProductNumber < this.items.length ? currentPaginatorIndex + 1 : currentPaginatorIndex;

		this.currentPaginatorIndex$.next(nextPaginatorIndex);
	}

	private back() {
    const currentPaginatorIndex = this.currentPaginatorIndex$.value;
    const startProductNumber = currentPaginatorIndex * this.currentPageSize$.value;
		const previousPaginatorIndex = startProductNumber > 0 ? currentPaginatorIndex - 1 : currentPaginatorIndex;

		this.currentPaginatorIndex$.next(previousPaginatorIndex);
	}

	private changePageSize() {

	}
}
