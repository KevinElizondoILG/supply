
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { toDate } from '@angular/common/src/i18n/format_date';
import { DatesOrder } from '../models/dates/DatesOrder';

@Pipe({
  name: 'orderDateFilter'
})
export class OrderDateFilterPipe implements PipeTransform {

  transform(value: any, from?: DatesOrder , to?: DatesOrder): any {

    if ( value !== undefined && from !== undefined && to !== undefined) {
     const fromdate  = from.year  + '-' + (from.month.toString().length === 1 ? ('0' + from.month ) : from.month) + '-'
      + (from.day.toString().length === 1 ? ('0' + from.day ) : from.day);
      const todate  = to.year  + '-' + (to.month.toString().length === 1 ? ('0' + to.month ) : to.month) + '-'
      + (to.day.toString().length === 1 ? ('0' + to.day ) : to.day);
      return value.filter(item =>
        item.CREATEDATE.substring(0, 10) >= fromdate && item.CREATEDATE.substring(0, 10) <= todate);

    }
  }

}
