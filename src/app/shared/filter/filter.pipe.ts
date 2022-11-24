import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform<T, P extends keyof T>(
      items: T[],
      searchValue: T[P],
		  searchingProperty: P, 
  ): T[] {    
    return items.filter(item => { 
              return (typeof item[searchingProperty] === 'string') 
                        ? (item[searchingProperty] as unknown as string).toUpperCase().includes((searchValue as unknown as string).toUpperCase())
                        : true
              });
  }

}
