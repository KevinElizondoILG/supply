import { ExcelService } from './../../services/excel.service';

import { Component, OnInit, Input } from '@angular/core';
import { ApistockService } from 'src/app/services/apistock.service';
import { Stock } from 'src/app/models/stock/stock';
import { formatDate } from '@angular/common';
import { DatesOrder } from 'src/app/models/dates/datesOrder';


@Component({
  selector: 'app-coordination',
  templateUrl: './coordination.component.html',
  styleUrls: ['./coordination.component.css']
})
@Input()

export class CoordinationComponent implements OnInit {
  public picking: boolean;
  public delivery: boolean;
  public stock: Stock;
  public rason: string;
  public reasons: any;
  public reasonselected: string;
  public commentsdelivery: string;
  public datedelivery: string;
  public hourdelivery: string;
  public OthersOrder: number;
  public isCollapsed = false;
  public cat: string;
  public CPQty: any;
  public xx: boolean;
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
  // ----------
  public orders: any;
  public body: any;
  public display: string;
  public delete: string;
  public approve: string;
  public class: string;
  public orderID: number;
  public index: number;
  public dateto: string;
  public datefrom: string;
  public page = 1;
  public pageSize = 32;
  public datesFilters: any;
  public today: any;
  public status: boolean;


    constructor(private _orders: ApistockService, private _excelService: ExcelService) {
      this._orders.getAllStoreOrders().subscribe( res => {
        this.orders = res;
       });
      this._orders.getStock().subscribe( s => {
        this.stock = s;
      });
    }

  ngOnInit() {
    this.status = false;

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
      window.location.replace('/coordination');

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

   EditModal() {
    this.class = 'backdrop';
      this.display = 'block';
   }

  onCloseHandled() {
    this.display = 'none';
    this.delete = 'none';
    this.approve = 'none';
  }
  EditOrder() {

  }
  deliverycheked(d) {
    this.delivery = d.target.checked;
  }
// ---------------------------------------------------------------------------------------- //
//
// EXCEL Export
exportAsXLSX(ORDERS, from?, to?): void {
// console.log(JSON.stringify(this.stock));
// console.log(JSON.stringify(ORDERS));
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
    const data = [this.stock, OrdersItems];
  this._excelService.exportAsExcelFile(data, this.datesFilters);
}
exportStockAsXLSX(stock): void {
  this.datesFilters = new Date().toISOString().split('T')[0];
  console.log(this.datesFilters);
  this._excelService.exportAsExcelFile2(stock, this.datesFilters);
}


}
