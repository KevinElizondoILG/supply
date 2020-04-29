import { map } from 'rxjs/operators';
import { TypeOrder} from './../../models/orders/orders';

import { Component, OnInit } from '@angular/core';
import { ApistockService } from 'src/app/services/apistock.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})



export class OrderComponent implements OnInit {
  public store: string;
  public stock: any;

  constructor(private _stock: ApistockService) {

   }

typeorder: TypeOrder;

  ngOnInit() {

    const data= this._stock.getStoreStock(this.store);
    data.subscribe( res => {this.stock =  res})
  }

  onPicking(e) {
    this.typeorder = e;
   // console.log('picking: ' + this.typeorder);
  }
  onRegular(e) {
    this.typeorder = e;
   // console.log('Regular: ' + this.typeorder);
  }

}



/*
    this.stock = this._stock.getStoreStock(this.store).pipe(
     map(data => {
     console.log(data)})
    );

    this.stock.subscribe(res => {
      //sessionStorage.setItem('stock', JSON.stringify(stock));
     console.log(res)
     });

*/