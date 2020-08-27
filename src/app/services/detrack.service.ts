import { Injectable } from '@angular/core';
import { Jobs } from '../models/jobs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

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
        "account_number": group
      }
    }
    return this.http.post('https://app.detrack.com/api/v2/dn/jobs/search', body, {
      headers: this.headers
    }).toPromise().then((res: Jobs) => {
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
    const db = this.afDatabase.database.app
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
    var trackingId = 'CR' + this.padLeft(this.count, 10, '0')
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
