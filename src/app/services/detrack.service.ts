
import { Injectable } from '@angular/core';
import { Jobs } from '../models/jobs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { firestore } from 'firebase/app';
import { jobsResponses } from '../models/jobresponse';
import firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class DetrackService {

  private APIKEY = environment.APIKEY
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': this.APIKEY
  });
  private count: any
  fieldRef: AngularFireObject<any>;

  constructor(private http: HttpClient, private afStore: AngularFirestore, private afDatabase: AngularFireDatabase) { }
  getAllOpenJobs(group) {
    const body = {
      "data": {
        "type": "Delivery",
        "statuses": ["dispatched", "info_recv", "on_hold", "head_to_delivery"],
        "account_number": group
      }
    }
    return this.http.post('https://app.detrack.com/api/v2/dn/jobs/search', body, {
      headers: this.headers
    }).toPromise().then((res: Jobs) => {
      return res
    }).catch(err => { console.error(err) })
  }
  getAllClosedJobs(group) {
    const body = {
      "data": {
        "statuses": ["completed", "failed"],
        // "account_number": group
      }
    }
    return this.http.post('https://app.detrack.com/api/v2/dn/jobs/search', body, {
      headers: this.headers
    }).toPromise().then((res: Jobs) => {
      return res
    }).catch(err => { console.error(err) })
  }
  getByDates(from, to) {
    const body = {
      "data": {
        "dates": {
          "from": from,
          "to": to
        },
        "page": "2",
        "limit": "100",
        // "account_number": group
      }
    }
    return this.http.post('https://app.detrack.com/api/v2/dn/jobs/search', body, {
      headers: this.headers
    }).toPromise().then((res: jobsResponses) => {
      return res
    }).catch(err => { console.error(err) })
  }



  createJobs(body) {
    return this.http.post('https://app.detrack.com/api/v2/dn/jobs/bulk', body, {
      headers: this.headers
    }).toPromise().then((res: Jobs) => {
      return res
    }).catch(err => { console.error(err) })
  }

  async couterJobs() {
    function makeid(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength)).toUpperCase();
      }
      return result;
    }

    const db = firebase.database().app
    const batch = db.firestore().batch();
    // Read the last TrackNo
    await db.firestore().collection('misc').doc('trackingNo').get().then(res => {
      this.count = res.data().counter
      // console.log(this.count)
    })
    //Increment the counter
    const increment = firestore.FieldValue.increment(1);
    // Document reference
    const storyRef = db.firestore().collection('misc').doc('trackingNo');
    // Update read count
    storyRef.update({ counter: increment });
    // Create a NEW TrackNo
    var trackingId = 'PTY' + this.count + '_' + this.padLeft(makeid(5), 5, '0')
    batch.update(storyRef, { trackNumber: trackingId });
    // batch.set(statsRef, { count: increment }, { merge: true });
    batch.commit();
    // console.log(trackingId)
    return trackingId
  }
  padLeft(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
  }


}
