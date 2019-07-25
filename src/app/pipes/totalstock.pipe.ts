import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalstock'
})
export class TotalstockPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if ( value !== undefined) {
   // const values = value.filter( data => data.PRIORIDAD === args);
    let total = 0;
    const x =  Array();
    value.forEach(element => {
      switch (element.PRIORIDAD) {
        case args:
         total += element.CANTIDAD;
         break;
      }
    });
    x.push(total);
  //  console.log(x);
    return  x;

  }
  }
}
