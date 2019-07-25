import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sucursal'
})


export class SucursalPipe implements PipeTransform {
  public values: any = { m: 'm' };
  transform(values: any, args?: any): any {
    if (args === undefined) {
      const resArr = [];
      values.forEach(function (item) {
        const i = resArr.findIndex(x => x.IDSUCURSAL === item.IDSUCURSAL);
        if (i <= -1) {
          resArr.push({ IDSUCURSAL: item.IDSUCURSAL });

        }
      });
      const sortable = [];

      resArr.sort(function (a, b) { return (a.IDSUCURSAL > b.IDSUCURSAL) ? -1 : ((b.IDSUCURSAL > a.IDSUCURSAL) ? 1 : 0); });

      return resArr;


    } else {
      const resArr = [];
      console.log('Pipe: ' + args);
      values.forEach(function (item) {
        const i = resArr.findIndex(x => x.IDSUCURSAL === item.IDSUCURSAL);
        if (i <= -1) {
          resArr.push({ IDSUCURSAL: item.IDSUCURSAL });

        }
      });
    }
    // return null;
  }

}
