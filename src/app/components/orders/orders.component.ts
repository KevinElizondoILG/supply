import { Component, OnInit } from '@angular/core';
import { ApistockService } from 'src/app/services/apistock.service';
import { ExcelService } from 'src/app/services/excel.service';
import { DatesOrder } from 'src/app/models/dates/DatesOrder';
import { Stock } from 'src/app/models/stock/stock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  reasons = [
    {name: 'Auditoria', code: 100 },
    {name: 'No hay capacidad', code: 200 },
    {name: 'Cierre', code: 300 },
    {name: 'Otro', code: 400}];
public dateto: DatesOrder;
public datefrom: DatesOrder;
public page = 1;
public pageSize = 5;
public datesFilters: any;
public status: boolean;
public isCollapsed = false;
public orders: any;
public body: any;
public display: string;
public delete: string;
public approve: string;
public class: string;
public orderID: number;
public index: number;
public numorder: number;
public delivery: any;
public reasonselected: any;
public commentsdelivery: any;
public hourdelivery: any;
public datedelivery: any;
public stock: any;
public WCP: number;
public WRE: number;
public WBTS: number;
public MCP: number;
public MRE: number;
public MBTS: number;
public CCP: number;
public CRE: number;
public CBTS: number;
public ACP: number;
public ARE: number;
public ABTS: number;
public order: any;
public dataOrd: any;




  constructor(private _orders: ApistockService, private _excelService: ExcelService, private router: Router) {
    this._orders.getStoreOrders(this).subscribe( res => {
      this.orders = res;

     });
  }

ngOnInit() {


  }



// EXCEL Export
exportAsXLSX(ORDERS, from: DatesOrder, to: DatesOrder): void {
  const fromdate  = from.year  + '-' + (from.month.toString().length === 1 ? ('0' + from.month ) : from.month) + '-'
  + (from.day.toString().length === 1 ? ('0' + from.day ) : from.day);
  const todate  = to.year  + '-' + (to.month.toString().length === 1 ? ('0' + to.month ) : to.month) + '-'
  + (to.day.toString().length === 1 ? ('0' + to.day ) : to.day);
  this.datesFilters = {
    from: fromdate,
    to: todate
  };
  const OrdersItems = ORDERS.filter(item =>
    item.CREATEDATE.substring(0, 10) >= fromdate && item.CREATEDATE.substring(0, 10) <= todate);
  this._excelService.exportAsExcelFile(OrdersItems, this.datesFilters);
}

  DeleteModal(x, i) {
    this.orderID = x;
    this.index = i;
    this.class = 'backdrop';
      this.delete = 'block';
   }
  deleteOrder() {
    // console.log(JSON.stringify(this.orderID));
     this._orders.getDeleteOrder(this.orderID);
    this.orders.splice(this.index, 1);
    this.delete = 'none';
    this.class = '';
    alert('Se ha Eliminado la orden:' + this.orderID);
    location.reload();
   // this.router.navigate(['/orders']) ;
    }

  ApproveModal(x) {
    this.orderID = x;
  this.class = 'backdrop';
    this.approve = 'block';
 }
 approveOrder() {
  this.body = {
    NUMORDER: this.orderID,
    STATUS: 'APPROVED'
  };
  this._orders.putApprove(this.body);
  this.approve = 'none';
  this.class = '';
  location.reload();
}

 EditModal(num, store) {
  this.class = 'backdrop';
    this.display = 'block';
  /*
  this._orders.getStoreStock(store)
    .subscribe((datos: Stock) => (
      this.stock = datos
      , console.log(JSON.stringify(this.stock))
      // this.xx = true
    ));
  */
  this._orders.getOrder(JSON.stringify(num)).subscribe( res => {
    this.dataOrd = res[0];
    this.numorder = this.dataOrd.NUMORDER;
    this.datedelivery = this.dataOrd.DATEDELIVERY;
    this.hourdelivery = this.dataOrd.HOURDELIVERY;
    this.commentsdelivery = this.dataOrd.COMMENTSDELIVERY;
    this.reasonselected = this.dataOrd.REASONSELECTED;
   });

 }



 EditOrder(id) {
const order = {
  NUMORDER: id,
  DATEDELIVERY: this.datedelivery,
  HOURDELIVERY: this.hourdelivery,
  COMMENTSDELIVERY: this.commentsdelivery,
  REASONSELECTED:  this.reasonselected,
  DATECHANGED: this.delivery
};
// console.log(JSON.stringify(order));
  this._orders.putEditStore(order);
  location.reload();
  alert('Se modifico correctamente.');
 }
onCloseHandled() {
  this.display = 'none';
  this.delete = 'none';
  this.approve = 'none';
}

deliverycheked(d) {
  this.delivery = d.target.checked;
}





}
