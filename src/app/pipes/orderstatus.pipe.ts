import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderstatus'
})
export class OrderstatusPipe implements PipeTransform {

  transform(value: any, status?: any): any {
    if ( value !== undefined) {
      return status !== true ? (value.filter( item => item.STATUS === 'PENDING')) : (value);

    }
  }

}
