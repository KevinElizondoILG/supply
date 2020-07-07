import { Component, OnInit } from '@angular/core';
import { ApistockService } from 'src/app/services/apistock.service';
import { ExcelService } from 'src/app/services/excel.service';
import { FEFOStock } from 'src/app/models/stock/stock';

@Component({
  selector: 'app-fefo',
  templateUrl: './fefo.component.html',
  styleUrls: ['./fefo.component.css']
})
export class FefoComponent implements OnInit {
  public stock: FEFOStock;
  public filterSucursal: string;
  public filterDua: string;
  public filter: boolean;
  public filterSub: boolean;
  public filterSearch: string;
  constructor(private _http: ApistockService, private _excelService: ExcelService) { }

  ngOnInit() {
    this._http.getStockFEFO().subscribe(stock => {
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
