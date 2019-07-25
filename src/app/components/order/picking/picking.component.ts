import { ApistockService } from './../../../services/apistock.service';
import { Component, OnInit } from '@angular/core';
import { PickingOrder, TypeOrder } from 'src/app/models/orders/orders';
import { Stock } from 'src/app/models/stock/stock';
import { Router } from '@angular/router';


@Component({
  selector: 'app-picking',
  templateUrl: './picking.component.html',
  styleUrls: ['./picking.component.css']
})
export class PickingComponent implements OnInit {

 reasons = [
    {name: 'Auditoria', code: 100 },
    {name: 'No hay capacidad', code: 200 },
    {name: 'Cierre', code: 300 },
    {name: 'Otro', code: 400}];
  marked = false;

  public picking: boolean;
  public delivery: boolean;
  public stock: any;
  public rason: string;
  public reasonselected: string;
  public commentsdelivery: string;
  public datedelivery: string;
  public hourdelivery: string;
  public OthersOrder: number;
  public pickorder: PickingOrder;
  public cat: string;
  public CPQty: any;
  public xx: boolean;
  public typeorder: TypeOrder;
  public WCP: any;
  public WRE: number;
  public WBTS: number;
  public MCP: any;
  public MRE: number;
  public MBTS: number;
  public CCP: any;
  public CRE: number;
  public CBTS: number;
  public ACP: any;
  public ARE: number;
  public ABTS: number;
  public body: any;
  public now = new Date();
  private passencry = '13456$#@$^@1ILGF';
  public username: string;
  public store: string;

  constructor( private _stock: ApistockService, private router: Router) {
    this.store =  localStorage.getItem('store');
    this.username =  localStorage.getItem('currentUser');
    this.stock = JSON.parse(localStorage.getItem('stock'));
    this.delivery = false;
    this.reasonselected = '';
    this.commentsdelivery = '';
    this.datedelivery = '';
    this.hourdelivery = '';
    this.WBTS = 0;
    this.WCP = 0;
    this.WRE = 0;
    this.MBTS = 0;
    this.MCP = 0;
    this.MRE = 0;
    this.CBTS = 0;
    this.CCP = 0;
    this.CRE = 0;
    this.ABTS = 0;
    this.ACP = 0;
    this.ARE = 0;

/*    this.delivery = false;
    console.log('delivery: ' + this.delivery);
    console.log('picking: ' + this.typeorder);
    */
   }

   ngOnInit() {

      this.xx = true;


  }


   filterData(value: any, genero: string, prioridad: string) {

const arr = value.filter((element) => {
  if (element.PRIORIDAD  === prioridad && element.NOMBRE_CATEGORIA === genero) {
      // console.log(prioridad + ' ' + genero + ' ' + element.CANTIDAD);
      return element.CANTIDAD;
} else {
  return null;
}
});



  /*  let total = 0;
    const y = Array();
    return  value.forEach( element => {


      if (element.PRIORIDAD  === 'CP' ) {
          if (element.NOMBRE_CATEGORIA === 'WOMENS') {
            total = element.CANTIDAD;
            y.push(total);
           //  console.log(y + ' GENERO: ' + genero + ' - PRIORIDAD:  ' + element.PRIORIDAD);
console.log(y);
          } else  {
            return null;
          }
      } else {
        return null;
      }


    });*/


  }




  totalsPriority(value, prioridad) {
    let total = 0;
    const y = Array();
    value.forEach(element => {

       switch (element.PRIORIDAD) {
         case prioridad:
        total += element.CANTIDAD;
        y.push(total);
return y;
        break;

      }

    });
    return total;

  }



  saveOrder(x) {

this.CPQty = this.totalsPriority( x, 'CP');

this.ACP =  this.filterData(x, 'ACCESORIES', 'CP');


x.forEach(cp => {
   if (cp.PRIORIDAD  === 'CP' && cp.NOMBRE_CATEGORIA === 'CHILDRENS') {
    this.CCP = cp.CANTIDAD;
  }
   if (cp.PRIORIDAD  === 'CP' && cp.NOMBRE_CATEGORIA === 'ACCESORIES') {
  this.ACP = cp.CANTIDAD;
 }
 if (cp.PRIORIDAD  === 'CP' && cp.NOMBRE_CATEGORIA === 'WOMENS') {
  this.WCP = cp.CANTIDAD;
}
if (cp.PRIORIDAD  === 'CP' && cp.NOMBRE_CATEGORIA === 'MENS') {
  this.MCP = cp.CANTIDAD;
}
});
if (!this.datedelivery) {
  this.datedelivery = new Date(Date.now() /*- 1 * 24 * 60 * 60 * 1000*/).toISOString().slice(0, 10);
}

this.body =  {
  STORE: this.store,
  USERID: this.username,
  CREATEDATE: (new  Date(Date.now() ).toISOString().slice(0, 10)) + ' ' + (new Date().toLocaleTimeString()),
  TYPE: 'PICKING',
  DATECHANGED:  this.delivery,
  REASONSELECTED: this.reasonselected,
  DATEDELIVERY: this.datedelivery,
  HOURDELIVERY: this.hourdelivery,
  COMMENTSDELIVERY: this.commentsdelivery,
  R_OTHERSQTY: 0,
  R_CPQTY: 0,
  P_WBTS: this.WBTS,
  P_WCP:  this.WCP,
  P_WRE: this.WRE,
  P_MBTS: this.MBTS,
  P_MCP:  this.MCP,
  P_MRE: this.MRE,
  P_CBTS: this.CBTS,
  P_CCP:  this.CCP,
  P_CRE: this.CRE,
  P_ABTS: this.ABTS,
  P_ACP: this.ACP,
  P_ARE: this.ARE,
  STATUS: 'PENDING'
};
 this._stock.postRegular(this.body);
 this.cleardata();
 this.router.navigate(['/order']) ;
 // location.assign('/order');
// fin saveOrder
}

cleardata() {
  this.delivery = false;
  this.reasonselected = '';
  this.commentsdelivery = '';
  this.datedelivery = '';
  this.hourdelivery = '';
  this.WBTS = 0;
  this.WCP = 0;
  this.WRE = 0;
  this.MBTS = 0;
  this.MCP = 0;
  this.MRE = 0;
  this.CBTS = 0;
  this.CCP = 0;
  this.CRE = 0;
  this.ABTS = 0;
  this.ACP = 0;
  this.ARE = 0;

}

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
  deliverycheked(d) {
    this.delivery = d.target.checked;
  }


}

