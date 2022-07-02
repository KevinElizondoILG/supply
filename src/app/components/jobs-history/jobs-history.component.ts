import { ApistockService } from 'src/app/services/apistock.service';
import { jobsResponses, DataEntity, Links } from './../../models/jobresponse';

import { DetrackService } from './../../services/detrack.service';
import { DatafireService } from './../../services/datafire.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { DatesOrder } from 'src/app/models/dates/DatesOrder';
import { MatDialog } from '@angular/material';
import { DialogPdfComponent } from 'src/app/modals/dialog-pdf/dialog-pdf.component';


@Component({
  selector: 'app-jobs-history',
  templateUrl: './jobs-history.component.html',
  styleUrls: ['./jobs-history.component.css']
})
export class JobsHistoryComponent implements OnInit {

  data: any;
  public dateto: DatesOrder;
  public datefrom: DatesOrder;
  public datesFilters: any;
  public status: boolean;
  public isCollapsed = false;
  public links: any;


  constructor(private http: HttpClient, private detrack: DetrackService, private _datafirebase: DatafireService, private _api: ApistockService,
    public dialog: MatDialog) {

  }
  presentPdf(title, subtitle, message, route?) {
    this.dialog.open(DialogPdfComponent, {
      data: {
        title: title,
        subtitle: subtitle,
        message: message,
      },
      panelClass: 'custom-modalbox'
    })
    this.dialog.afterAllClosed.forEach(res => {
      location.reload()
      // this._route.navigateByUrl(route)
    }
    )
  }
  ngOnInit() {
    this._datafirebase.getJobsFireBase()


  }

  downloadPDF() {
    this._api.presentPdf('Generar PDF', 'Generar PDF', 'Su numero.', { hola: "hola" }, '/job-requests')

  }

}
