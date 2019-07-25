import { Router } from '@angular/router';
import { Stock, TigoStock } from './../models/stock/stock';

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment.prod';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApistockService {
  public SERVER = environment.SERVER;
  public API_URL = environment.API_URL;
  private store = localStorage.getItem('store');
  private order;
  private x: string;


  constructor(private _http: HttpClient, private _route: Router) {

  }

  getStoreStock(b?): Observable<Stock> {
    return this._http.get<Stock>(this.SERVER + this.API_URL + 'InvMasterbox?IDSucursal=' + this.store);
  }
  getStock(): Observable<Stock> {
    return this._http.get<Stock>(this.SERVER + this.API_URL + 'InvMasterbox');
  }

  getTigoStock(): Observable<TigoStock> {
    return this._http.get<TigoStock>(this.SERVER + this.API_URL + 'Inv/Tigo');
  }
  postRegular(body) {
    return this._http.post(this.SERVER + this.API_URL + 'Order', body).subscribe(res => {
      return res = 'ok';
    });
  }

  getStoreOrders(body) {
    return this._http.get(this.SERVER + this.API_URL + 'Order?IDStore=' + this.store);
  }

  getOrder(body) {
    this.order = body;
    return this._http.get(this.SERVER + this.API_URL + 'Order?IDOrder=' + this.order);
  }
  getAllStoreOrders() {
    this.order = {};
    return this._http.post(this.SERVER + this.API_URL + 'Order/all', this.order);
  }



  getDeleteOrder(body) {
    return this._http.get(this.SERVER + this.API_URL + 'Order?delete=' + body).subscribe((ok) => {
      return ok = 'ok';
    });
  }

  putApprove(body) {
    return this._http.post(this.SERVER + this.API_URL + 'Order/approve', body).subscribe((ok) => {
      return ok = 'ok';
    });
  }
  putEdit(body) {
    return this._http.post(this.SERVER + this.API_URL + 'Order/Edit', body).subscribe((ok) => {
      return ok = 'ok';
    });
  }
  putEditStore(body) {
    return this._http.post(this.SERVER + this.API_URL + 'Order/editstore', body).subscribe((ok) => {
      return ok = 'ok';
    });
  }

}
