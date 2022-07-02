import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Alertsclass } from 'src/app/models/alerts';
import { DialogPdfComponent } from '../dialog-pdf/dialog-pdf.component';

@Component({
  selector: 'app-dialog-alerts',
  templateUrl: './dialog-alerts.component.html',
  styleUrls: ['./dialog-alerts.component.css']
})
export class DialogAlertsComponent implements OnInit {

  verify: any
  pdf: any
  constructor(public dialogRef: MatDialogRef<DialogAlertsComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Alertsclass) {
    //console.log(data.data)
    if (data.subtitle === 'verify') {
      this.verify = true
      this.data.subtitle = 'Verifique su correo.'
    } else {
      this.verify = false
    }
    if (data.data) {
      this.pdf = true
    } else {
      this.pdf = false
    }
  }

  presentPdf(title, subtitle, message, data?, route?) {
    this.dialog.open(DialogPdfComponent, {
      data: {
        title: title,
        subtitle: subtitle,
        message: message,
        data: data
      },
      panelClass: 'custom-modalbox',
      width: '1200px',
    })
    this.dialog.afterAllClosed.forEach(res => {
      location.reload()
      // this._route.navigateByUrl(route)
    }
    )
  }


  ngOnInit() {
  }
  cancelar() {
    this.dialogRef.close();
  }
  getPdf(data) {
    this.presentPdf('Generar PDF', 'PDF', 'impimir', data, '/job-requests')
  }

}
