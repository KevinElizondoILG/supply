import { DATA, SUCURSALES } from './../models/jobs';
import { Router } from '@angular/router';
import { Stock, TigoStock, StockReportGeneral, FEFOStock } from './../models/stock/stock';

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { DialogAlertsComponent } from '../modals/dialog-alerts/dialog-alerts.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogPdfComponent } from '../modals/dialog-pdf/dialog-pdf.component';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApistockService {
  private ENV = environment
  private SERVER = environment.SERVER;
  private API_URL = environment.API_URL;
  private CRC = this.SERVER + this.API_URL + this.ENV.CRC + this.ENV.TOKEN
  private PTY = this.SERVER + this.API_URL + this.ENV.PTY + this.ENV.TOKEN
  private PP = this.SERVER + this.API_URL + this.ENV.PP + this.ENV.TOKEN
  private NPP = this.SERVER + this.API_URL + this.ENV.NPP + this.ENV.TOKEN
  private TEST = this.SERVER + this.API_URL + this.ENV.TEST + this.ENV.TOKEN
  private store = localStorage.getItem('store');
  private order;
  private x: string;


  constructor(private _http: HttpClient, private _route: Router, public dialog: MatDialog,) {

  }

  presentAlert(title, subtitle, message, data?, route?) {
    this.dialog.open(DialogAlertsComponent, {
      data: {
        title: title,
        subtitle: subtitle,
        message: message,
        data: data
      },
      panelClass: 'custom-modalbox'
    })
    this.dialog.afterAllClosed.forEach(res => {
      location.reload()
      // this._route.navigateByUrl(route)
    }
    )
  }
  presentPdf(title, subtitle, message, data, route?) {
    this.dialog.open(DialogPdfComponent, {
      data: {
        title: title,
        subtitle: subtitle,
        message: message,
        data: data
      },
      panelClass: 'custom-modalbox',
      width: '100vw'
    })
    this.dialog.afterAllClosed.forEach(res => {
      location.reload()
      // this._route.navigateByUrl(route)
    }
    )
  }

  getStoreStock(b?): Observable<Stock> {
    return this._http.get<Stock>(this.CRC + this.ENV.INVETARIOMASTERBOXSUCURSAL + this.store);
  }
  getStock(): Observable<Stock> {
    return this._http.get<Stock>(this.CRC + this.ENV.INVENTARIOMASTERBOX);
  }

  getTigoStock(): Observable<TigoStock> {
    return this._http.get<TigoStock>(this.CRC + this.ENV.TIGOINVETARIO);
  }
  getStockFEFO(): Observable<FEFOStock> {
    return this._http.get<FEFOStock>(this.CRC + this.ENV.INVENTARIOCONSORCIO_FEFO + localStorage.getItem("consorcio"));
  }
  getStockReportGeneral(country): Observable<StockReportGeneral> {
    switch (country) {
      case 'PTY':
        return this._http.get<StockReportGeneral>(this.PTY + this.ENV.INVENTARIOCONSORCIO + localStorage.getItem("consorcio"));
        break;
      case 'CRC':
        return this._http.get<StockReportGeneral>(this.CRC + this.ENV.INVENTARIOCONSORCIO + localStorage.getItem("consorcio"));
        break;
    }
  }
  getAllStockWMS(country): Observable<StockReportGeneral> {
    switch (country) {
      case 'PTY':
        return this._http.get<StockReportGeneral>(this.CRC + this.ENV.INVENTARIOALL);
        break;
      case 'CRC':
        return this._http.get<StockReportGeneral>(this.CRC + this.ENV.INVENTARIOALL);
        break;;
    }

  }

  postRegular(body) {
    return this._http.post(this.PP + this.ENV.ORDERADD, body).subscribe(res => {
      return res = 'ok';
    });
  }

  getStoreOrders(body) {
    return this._http.get(this.PP + this.ENV.ORDERBYSTORE + this.store);
  }

  getOrder(body) {
    this.order = body;
    return this._http.get(this.PP + this.ENV.ORDERBYID + this.order);
  }
  getAllStoreOrders() {
    this.order = {};
    return this._http.post(this.PP + this.ENV.ORDERALL, this.order);
  }



  getDeleteOrder(body) {
    return this._http.get(this.PP + this.ENV.ORDERDELELTE + body).subscribe((ok) => {
      return ok = 'ok';
    });
  }

  putApprove(body) {
    return this._http.post(this.PP + this.ENV.ORDERAPPROVE, body).subscribe((ok) => {
      return ok = 'ok';
    });
  }
  putEdit(body) {
    return this._http.post(this.PP + this.ENV.ORDEREDIT, body).subscribe((ok) => {
      return ok = 'ok';
    });
  }
  putEditStore(body) {
    return this._http.post(this.PP + this.ENV.ORDEREDITSTORE, body).subscribe((ok) => {
      return ok = 'ok';
    });
  }

  getTiendaData(email) {
    return this._http.get(this.PTY + this.ENV.TIENDAS + email);
  }
  getAllTiendas() {
    return this._http.get(this.PTY + this.ENV.ALLTIENDAS);
  }
  getTiendaByName(name) {

  }



}
