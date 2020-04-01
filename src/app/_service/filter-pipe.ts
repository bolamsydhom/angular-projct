import { Pipe, PipeTransform } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Pipe({ name: 'searchFilter' })

export class SearchFilterPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if (!search) { return ; }
    let solution = value.filter(v => {

      console.log(v);
      return v.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    })
    return solution;
  }
}
