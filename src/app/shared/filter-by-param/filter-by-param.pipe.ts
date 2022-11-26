import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByParam'
})
export class FilterByParamPipe<T,P extends keyof T> implements PipeTransform {

  transform(elements: T[], filterValue: T[P], filterField: P) {
    const valueLowerCase = String(filterValue).toLowerCase();
    
    return elements.filter(
      element => {
        const elementNameLowerCase = String(element[filterField]).toLowerCase();
        return element[filterField] && elementNameLowerCase.includes(valueLowerCase);
      }
    );
  }

}
