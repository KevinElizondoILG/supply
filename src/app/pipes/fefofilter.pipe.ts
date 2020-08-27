import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fefofilter'
})
export class FefofilterPipe implements PipeTransform {

  transform(values: any, args?: any, args2?: any, args3?: any): any {
    if (args) {
      if (args2) {
        const x = values.filter(stock => {
          return stock.IDSUCURSAL.includes(args);
        });
        return x.filter(stock => {
          return stock.DUA.includes(args2);
        });
      } else {
        return values.filter(stock => {
          return stock.IDSUCURSAL.includes(args);
        });
      }
    } if (args2) {
      return values.filter(stock => {
        return stock.DUA.includes(args2);
      });
    } if (args3) {
      const desc = values ? values.filter(item => item.NOMBRELARGO.search(new RegExp(args3, 'i')) > -1
      ) : [];

      if (desc.length === 0) {
        const sku = values ? values.filter(item => item.CLIENT_CODE.search(new RegExp(args3, 'i')) > -1
        ) : [];
        return sku;
      } else {
        return desc;
      }
    } else {
      return values;
    }

  }

}
