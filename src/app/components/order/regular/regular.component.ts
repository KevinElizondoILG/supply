import { Component, OnInit, NgModule } from '@angular/core';
import { ApistockService } from 'src/app/services/apistock.service';
import { PickingOrder, TypeOrder } from 'src/app/models/orders/orders';
import { Stock } from 'src/app/models/stock/stock';
import { Router } from '@angular/router';




@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styleUrls: ['./regular.component.css']
})
export class RegularComponent implements OnInit {

   reasons = [
                {name: 'Auditoria', code: 100 },
                {name: 'No hay capacidad', code: 200 },
                {name: 'Cierre', code: 300 },
                {name: 'Otro', code: 400}];

  marked = false;

  public picking: boolean;
  public delivery: boolean;
  public stock: any;
  public reason: string ;
  public reasonselected: string;
  public commentsdelivery: string;
  public datedelivery: string;
  public hourdelivery: string;
  public OthersQty: number;
  public CPQty: number;
  public pickorder: PickingOrder;
  public cat: string;
  public xx: boolean;
  public x: any ;
  public typeorder: TypeOrder;
  public now = new Date();
  public DataApi: any;
  public body: any;
  private passencry = '13456$#@$^@1ILGF';
  public username: string;
  public store: string;



  constructor( private _stock: ApistockService, private router: Router) {
    this.store =  localStorage.getItem('store');
    this.username =   localStorage.getItem('currentUser');
    this.stock = JSON.parse(localStorage.getItem('stock'));
    this.OthersQty = 0;
    this.CPQty = 0;
    this.delivery = false;
    this.reasonselected = '';
    this.commentsdelivery = '';
    this.datedelivery = '';
    this.hourdelivery = '';
    // console.log(this.CPQty);

   }


   ngOnInit() {
    this.xx = true;
  }


  filterData(value, genero, prioridad) {
    let total = 0;
    const y = Array();
    value.forEach(element => {
     switch (element.NOMBRE_CATEGORIA) {
       case genero:
       switch (element.PRIORIDAD) {
         case prioridad:
        total += element.CANTIDAD;

      //  console.log(total);

        break;
      }

         break;

       default:
         break;
     }
    });
    return total;

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
  if (!this.datedelivery) {
      this.datedelivery = new Date(Date.now() ).toISOString().slice(0, 10);
    }

this.CPQty = this.totalsPriority( x, 'CP');

this.body =  {
  STORE: this.store,
  USERID: this.username,
  CREATEDATE: (new  Date(Date.now()).toISOString().slice(0, 10)) + ' ' + (new Date().toLocaleTimeString()),
  TYPE: 'REGULAR',
  DATECHANGED:  this.delivery,
  REASONSELECTED: this.reasonselected,
  DATEDELIVERY: this.datedelivery,
  HOURDELIVERY: this.hourdelivery,
  COMMENTSDELIVERY: this.commentsdelivery,
  R_OTHERSQTY: this.OthersQty,
  R_CPQTY: this.CPQty,
  P_WBTS: 0,
  P_WCP: 0,
  P_WRE: 0,
  P_MBTS: 0,
  P_MCP: 0,
  P_MRE: 0,
  P_CBTS: 0,
  P_CCP: 0,
  P_CRE: 0,
  P_ABTS: 0,
  P_ACP: 0,
  P_ARE: 0,
  STATUS: 'PENDING'
};
// console.log(this.body);
// console.log(JSON.stringify(x) );

 this._stock.postRegular(this.body);
 this.cleardata();
 alert('Se ha creado su pedido');
 this.router.navigate(['/order']) ;
 // location.assign('/order');
// fin saveOrder
}
cleardata() {
  this.OthersQty = 0;
  this.CPQty = 0;
  this.delivery = false;
  this.reasonselected = '';
  this.commentsdelivery = '';
  this.datedelivery = '';
  this.hourdelivery = '';
}
  toggleVisibility(e) {
    this.marked = e.target.checked;

  }

  deliverycheked(d) {
    this.delivery = d.target.checked;

  //  console.log('delivery: ' + this.delivery);

  }


}

