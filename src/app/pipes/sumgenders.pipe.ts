import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumgenders'
})
export class SumgendersPipe implements PipeTransform {

  transform(value: any, args: any): any {
    // const approved = value.filter ( student => student.NOMBRE_CATEGORIA === args);
    if ( value !== undefined) {
    let total = 0;
    const x =  Array();
    value.forEach(element => {
      switch (element.NOMBRE_CATEGORIA) {
        case args:
         total += element.CANTIDAD;
          break;
      }
    });
    x.push(total);
    return  x;
  }
  }
}
