import { jsonJob } from './../../models/alerts';
import { Component, Inject, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import html2canvas from 'html2canvas';
import { DetrackService } from 'src/app/services/detrack.service';
import { DatafireService } from 'src/app/services/datafire.service';
import { Alertsclass } from 'src/app/models/alerts';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-pdf',
  templateUrl: './dialog-pdf.component.html',
  styleUrls: ['./dialog-pdf.component.css']
})
export class DialogPdfComponent implements OnInit {
  code: any;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value: any
  JobData: jsonJob

  constructor(private detrack: DetrackService, @Inject(MAT_DIALOG_DATA) public data: Alertsclass) {
    this.JobData = data.data
  }

  ngOnInit() {
    //   this.detrack.couterJobs().then(res => { this.code = res })
  }

  downloadPDF() {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'letter', true);
    html2canvas(DATA).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      // Añadir imagen Canvas a PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined);
      return doc;
    }).then((docResult) => {
      docResult.save(this.JobData.json.jobNo + '.pdf');
    });
  }
}
