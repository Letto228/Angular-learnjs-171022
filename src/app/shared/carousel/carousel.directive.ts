import { Directive, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';

interface ICarouselContext<T> {
	$implicit: T | T[];
	index: number;
	allIndexes: number[];
	appCarouselOf: T[];
	next: () => void;
	back: () => void;
	selectIndex?: (index: number) => void;
}

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnInit, OnChanges, OnDestroy {
	@Input() appCarouselElementsSize: number = 1;
	@Input() appCarouselOf: T[] | undefined | null;

	private groupedItems: Array<T[]> | T[] = [];;

	private readonly currentIndex$ = new BehaviorSubject<number>(0);
	private readonly destroy$ = new Subject<void>();

	constructor(
		private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<ICarouselContext<T>>,
	) { }

	ngOnChanges({ appCarouselOf, elementsSize }: SimpleChanges) {
		if (appCarouselOf || elementsSize) {
			if (!this.appCarouselOf?.length) {
				this.viewContainer.clear();

				return;
			}

			this.groupedItems = this.getGroupedItems(this.appCarouselOf);
			this.currentIndex$.next(0);
		}

	}

	ngOnInit() {
		console.log(this.appCarouselOf);

		this.listenCurrentIndexChange();
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}

	private getGroupedItems(items: T[]): Array<T[]> | T[] {
		return this.appCarouselElementsSize <= 1
			? items
			: this.groupingItemsByElementsSize(items, this.appCarouselElementsSize);
	}

	private groupingItemsByElementsSize<T>(items: T[], elementsSize: number): Array<T[]> {
		return items.reduce(
			(groupedItems: Array<T[]>, item: T) => {
				const groupedItemsLastIndex = groupedItems.length - 1;

				if (groupedItems[groupedItemsLastIndex].length < elementsSize) {
					groupedItems[groupedItemsLastIndex].push(item);

					return groupedItems;
				}

				return [...groupedItems, [item]];
			},
			[[]],
		);
	}

	private listenCurrentIndexChange() {
		this.currentIndex$
			.pipe(
				map(index => this.getCurrentContext(index, this.groupedItems)),
				takeUntil(this.destroy$),
			)
			.subscribe(context => {
				this.viewContainer.clear();
				this.viewContainer.createEmbeddedView(this.template, context);
			});
	}

	private getCurrentContext(activeIndex: number, items: Array<T[]> | T[]): ICarouselContext<T> {
		return {
			$implicit: items[activeIndex],
			index: activeIndex,
			allIndexes: this.groupedItems.map((_, index) => index),
			appCarouselOf: this.appCarouselOf as T[],
			next: () => {
				this.next();
			},
			back: this.back.bind(this),
			selectIndex: (index: number) => {
				this.selectIndex(index);
			}
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;
		console.log(nextIndex);
		console.log(this.groupedItems);


		if (!this.appCarouselOf?.length) {
			return;
		}

		this.currentIndex$.next(nextIndex < this.appCarouselOf?.length ? nextIndex : 0);
	}

	private back() {
		const prevIndex = this.currentIndex$.value - 1;

		if (!this.appCarouselOf?.length) {
			return;
		}

		this.currentIndex$.next(prevIndex >= 0 ? prevIndex : this.appCarouselOf?.length - 1);
	}

	private selectIndex(index: number) {
		this.currentIndex$.next(index);
	}
}
