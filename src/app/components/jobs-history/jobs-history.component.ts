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

  constructor(private http: HttpClient, private detrack: DetrackService) { }

  ngOnInit() {

    this.links = 'https://app.detrack.com/api/v2/dn/jobs?page=2&limit=100'
  }


  getJobsByDates() {
    var dfrom = this.datefrom.year + '-' + this.datefrom.month + '-' + this.datefrom.day;
    var dto = this.dateto.year + '-' + this.dateto.month + '-' + this.dateto.day
    var a = performance.now();
    this.detrack.getByDates(dfrom, dto).then(
      (res: jobsResponses) => {
        console.log(res);
        // res.data.map(job => {
        //   console.log(job)
        // })
        var b = performance.now();
        b - a;
        console.log(a + '   -   ' + b)
        this.data = res.data
        // this.links = res.links
        // console.log(this.links)
        // res.data.forEach((job: DataEntity) => {
        //   console.log(job)
        //   this.data = job
        // })
      }
    )
  }
  EditOrder(numorder) { }

}
