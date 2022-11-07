import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';

interface ICarouselContext<T> {
	$implicit: T;
	index: number;
	appCarousel: T[];
	next: () => void;
	back: () => void;
}

@Directive({
	selector: '[appCarousel]',
})
export class CarouselDirective<T> implements OnInit, OnDestroy {
	@Input() set appCarousel(items: T[] | undefined) {
		if (!items?.length) {
			this.viewContainer.clear();

			return;
		}

		this.items = items;

		this.currentIndex$.next(0);
	}

	private items: T[] = [];

	private readonly currentIndex$ = new BehaviorSubject<number>(0);
	private readonly destroy$ = new Subject<void>();

	constructor(
		private readonly viewContainer: ViewContainerRef,
		private readonly template: TemplateRef<ICarouselContext<T>>,
	) {}

	ngOnInit() {
		this.listenCurrentIndexChange();
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
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

	private getCurrentContext(currentIndex: number): ICarouselContext<T> {
		return {
			$implicit: this.items[currentIndex],
			index: currentIndex,
			appCarousel: this.items,
			next: () => {
				this.next();
			},
			back: this.back.bind(this),
		};
	}

	private next() {
		const nextIndex = this.currentIndex$.value + 1;

		this.currentIndex$.next(nextIndex < this.items.length ? nextIndex : 0);
	}

	private back() {
		const previosIndex = this.currentIndex$.value - 1;

		this.currentIndex$.next(previosIndex >= 0 ? previosIndex : this.items.length - 1);
	}
}
