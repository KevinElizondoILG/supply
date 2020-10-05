import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alertsclass } from 'src/app/models/alerts';

@Component({
  selector: 'app-dialog-alerts',
  templateUrl: './dialog-alerts.component.html',
  styleUrls: ['./dialog-alerts.component.css']
})
export class DialogAlertsComponent implements OnInit {

  verify: any
  constructor(public dialogRef: MatDialogRef<DialogAlertsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alertsclass) {
    if (data.subtitle === 'verify') {
      this.verify = true
      this.data.subtitle = 'Verifique su correo.'
    } else {
      this.verify = false
    }
  }
  ngOnInit() {
  }
  cancelar() {
    this.dialogRef.close();
  }

}
