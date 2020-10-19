import { jobsResponses, DataEntity, Links } from './../../models/jobresponse';

import { DetrackService } from './../../services/detrack.service';
import { DatafireService } from './../../services/datafire.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { DatesOrder } from 'src/app/models/dates/datesOrder';

@Component({
  selector: 'app-jobs-history',
  templateUrl: './jobs-history.component.html',
  styleUrls: ['./jobs-history.component.css']
})
export class JobsHistoryComponent implements OnInit {

  data: any;
  public dateto: DatesOrder;
  public datefrom: DatesOrder;
  public page = 1;
  public pageSize = 5;
  public datesFilters: any;
  public status: boolean;
  public isCollapsed = false;
  public links: any;

  constructor(private http: HttpClient, private detrack: DetrackService, private _datafirebase: DatafireService) { }

  ngOnInit() {

    console.log(this.detrack.couterJobs())
  }



}
