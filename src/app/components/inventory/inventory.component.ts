import { Component, OnInit } from '@angular/core';
import { ApistockService } from 'src/app/services/apistock.service';
import { TigoStock } from 'src/app/models/stock/stock';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public stock: TigoStock;
  public filterSucursal: string;
  public filterDua: string;
  public filter: boolean;
  public filterSub: boolean;
  public filterSearch: string;
  constructor(private _http: ApistockService, private _excelService: ExcelService) { }

  ngOnInit() {
    this._http.getTigoStock().subscribe(stock => {
      this.stock = stock;

    });

  }

  onChange(e) {
    this.filterSucursal = e.target.value;
  }
  onChangeSub(e) {
    this.filterDua = e.target.value;
  }
  onClickOrg() {
    this.filter ?
      this.filter = false :
      this.filter = true;
  }
  onClickSub() {
    this.filterSub ?
      this.filterSub = false :
      this.filterSub = true;
  }
  clean() {
    this.filterSub = false;
    this.filter = false;
    this.filterSucursal = undefined;
    this.filterDua = undefined;

  }
  reset() {
    location.reload();
  }
  onChangeSearch(e) {
    this.filterSearch = e.target.value;
  }
  exportStockAsXLSX(stock): void {
    const datesFilters = new Date().toISOString().split('T')[0];
    this._excelService.exportAsExcelFile3(stock, datesFilters);
  }
}
