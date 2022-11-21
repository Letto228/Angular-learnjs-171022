import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByParam'
})
export class FilterByParamPipe<T extends object> implements PipeTransform {

  transform(elements: T[], filterValue: string, filterField: string) {
    const lowerCaseValue = filterValue.toLowerCase();
    
    // return elements.filter(
    //   element => Object.values(element)
    //     .some(
    //       value => value && String(value).includes(lowerCaseValue)
    //     )
    // );
    console.log(elements);
    
    return elements.filter(
      element => Object.entries(element)
        .some(
          value => value[1] && (value[0] === filterField) && (String(value[1]).includes(lowerCaseValue))
        )
    );
  }

}
