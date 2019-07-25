
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'genders'
})


export class GendersPipe implements PipeTransform {



  constructor( ) {
       }
  transform(value: any, genero?: string, prioridad?: string): any {
if ( value !== undefined) {

    return value.filter( item => item.NOMBRE_CATEGORIA === genero && item.PRIORIDAD === prioridad);

  }


  }
}
