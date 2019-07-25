import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dua'
})
export class DuaPipe implements PipeTransform {
  public values: any = { m: 'm' };
  transform(values: any, args?: any): any {

    if (args === undefined) {
      const resArr = [];
      values.forEach(function (item) {
        const i = resArr.findIndex(x => x.DUA.toUpperCase() === item.DUA.toUpperCase());
        if (i <= -1) {
          resArr.push({ DUA: item.DUA.toUpperCase() });
        }
      });
      const sortable = [];
      resArr.sort(function (a, b) { return (a.DUA > b.DUA) ? -1 : ((b.DUA > a.DUA) ? 1 : 0); });
      return resArr;


    } else {
      const resArr = [];
      console.log('Pipe: ' + args);
      values.forEach(function (item) {
        const i = resArr.findIndex(x => x.DUA === item.DUA);
        if (i <= -1) {
          resArr.push({ DUA: item.DUA });

        }
      });
    }
    // return null;
  }


}
