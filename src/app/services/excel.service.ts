import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }
  public exportAsExcelFile(json: any[], excelFileName: any): void {
    // console.log(JSON.stringify(json[0]));
    // console.log(JSON.stringify(json[1]));
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json[1]);
    const worksheet2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json[0]);
    // console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'Orders': worksheet, 'Stock': worksheet2 }, SheetNames: ['Orders', 'Stock'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  private saveAsExcelFile(buffer: any, range: any): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, 'PLAN DE ENTREGA DEL ' + range.from + ' AL ' + range.to + EXCEL_EXTENSION);
  }
  // -------------------------------------------------------------------

  public exportAsExcelFile2(json: any[], excelFileName: any): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    // console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile2(excelBuffer, excelFileName);
  }

  private saveAsExcelFile2(buffer: any, range: any): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, 'PP_CR_' + range + EXCEL_EXTENSION);
  }

  // -------------------------------------------------------------------

  public exportAsExcelFile3(json: any[], excelFileName: any): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    // console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile3(excelBuffer, excelFileName);
  }

  private saveAsExcelFile3(buffer: any, range: any): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, 'INV' + range + EXCEL_EXTENSION);
  }

}
