import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByParam'
})
export class FilterByParamPipe<T extends object> implements PipeTransform {

  transform(elements: T[], filterValue: string) {
    const lowerCaseValue = filterValue.toLowerCase();
    
    return elements.filter(
      element => Object.values(element)
        .some(
          value => value && String(value).includes(lowerCaseValue)
        )
    );
  }

}
