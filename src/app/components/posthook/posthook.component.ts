import { PosthookService } from './../../services/posthook.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-posthook',
  templateUrl: './posthook.component.html',
  styleUrls: ['./posthook.component.css']
})
export class PosthookComponent implements OnInit {
  postData: any
  constructor(private _post: PosthookService) { }
  public json: any;
  private _name = '';


  ngOnInit() {

    this._post.getSomethingFromServer(this.json).subscribe(response => {
      // do whatever you want with the response
      console.log('res: ' + JSON.stringify(response))
    }, error => {
      console.log('Error: ' + JSON.stringify(error))
      // handle error here
      // error.status to get the error code
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      console.log(propName)
      /*let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`propName: currentValue = cur, previousValue = prev`);*/
    }
  }


}
