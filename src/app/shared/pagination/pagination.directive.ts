import { Directive, Input, OnChanges, OnInit, SimpleChange, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';

interface IPaginationContext<T> {
	$implicit: T[];
	appPaginationOf: T[][];
  index: number | undefined;
  allIndexes: number[];
  next: () => void;
	back: () => void;
  getMasByIndex: (index: number) => void;
}

@Directive({
  selector: '[appPagination]'
})
export class PaginationDirective<T> implements OnInit, OnChanges{
  
  @Input() appPaginationOf: T[] | undefined;
  @Input() appPaginationElementNum: number | undefined;
  
  private groupProd: T[][] = [];
  
  private readonly currentIndex$ = new BehaviorSubject<number>(0);
  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<IPaginationContext<T>>,
  ) {}

  ngOnInit() {
    this.listenCurrentIndexChange();
  }
  
  ngOnChanges({appPaginationOf, appPaginationElementNum}: SimpleChanges) {   
    if (!appPaginationOf?.currentValue) {
      this.viewContainer.clear();
      return
    }

    this.currentIndex$.next(0);
    
    let tempMas: T[] = appPaginationOf.currentValue;    
    this.groupProd = this.getGroupProdusts(tempMas, appPaginationElementNum);
  }  
  
  private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(index => this.getCurrentContext(index)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainer.clear();
				this.viewContainer.createEmbeddedView(this.template, context);
			})
	}

  private getCurrentContext(currentIndex: number): IPaginationContext<T> {
		return {
			$implicit: this.groupProd[currentIndex],
			appPaginationOf: this.groupProd,
      index: currentIndex,
      allIndexes: this.getAllIndexes(),
			next: () => { this.next() },
			back: () => { this.back.bind(this) },
      getMasByIndex: (currIndex: number) => this.getMasByIndex(currIndex),
		};
	}

  private next() {
		const nextIndex = this.currentIndex$.value + 1;

		this.currentIndex$.next(nextIndex < this.groupProd.length ? nextIndex : 0);
	}

	private back() {
		const previosIndex = this.currentIndex$.value - 1;

		this.currentIndex$.next(previosIndex >= 0 ? previosIndex : this.groupProd.length - 1);
	}

  private getMasByIndex(index: number) {
    this.currentIndex$.next(index);
  }

  private getAllIndexes(): number[] {
    return this.groupProd.map((_, index) => index)
  }

  private getGroupProdusts(products: T[], elemNum: SimpleChange): any {
    let newGroupProd: T[][] = [];
    
    while (products.length) {
      newGroupProd.push(products.splice(0, elemNum.currentValue))
    }

    return newGroupProd;
  }
}
