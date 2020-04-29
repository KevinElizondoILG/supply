import { Component, OnInit } from '@angular/core';
import { ApistockService } from 'src/app/services/apistock.service';
import { ExcelService } from 'src/app/services/excel.service';
import { StockReportGeneral } from 'src/app/models/stock/stock';

@Component({
  selector: 'app-stockreport-general',
  templateUrl: './stockreport-general.component.html',
  styleUrls: ['./stockreport-general.component.css']
})
export class StockreportGeneralComponent implements OnInit {

  public stock: StockReportGeneral;
  public filter: boolean;
  public filterSub: boolean;
  public filterSearch: string;
  public country:string;
  constructor(private _http: ApistockService, private _excelService: ExcelService) { }

  ngOnInit() {
    var roll = localStorage.getItem("roll")
    this.country = localStorage.getItem("country")
    if (roll==='INT') {
      console.log(roll==='INT')
      this._http.getAllStockWMS(this.country).subscribe(stock => {
        this.stock = stock;
      });
    }else{
      this._http.getStockReportGeneral(this.country).subscribe(stock => {
        this.stock = stock;
      });
    }


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
