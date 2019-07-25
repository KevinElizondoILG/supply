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

  constructor(private _stock: ApistockService) {

   }

typeorder: TypeOrder;

  ngOnInit() {

    this._stock.getStoreStock(this.store).subscribe(stock => {
      localStorage.setItem('stock', JSON.stringify(stock));
     });
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
