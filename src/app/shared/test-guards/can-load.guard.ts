import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class CanLoadGuard implements CanLoad {
	canLoad(
		route: Route,
		segments: UrlSegment[],
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		console.log(route, segments);

		return window.prompt('Хотите загрузить данную страницу?') === 'Y';
	}
}
