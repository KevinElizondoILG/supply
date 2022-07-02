import { jsonJob } from './../models/alerts';
import { jobsResponses } from './../models/jobresponse';
import { Data, jobResponse } from './../models/jobs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DatafireService {

  isApproved: any;
  getUid: any
  constructor(
    private fireStore: AngularFirestore,
    private _data: AngularFireDatabase,
    private http: HttpClient) {

  }

  createID() {
    return this.fireStore.createId();
  }


  getUserProfile(uid) {
    // return this.fireStore.collection('users').doc(uid).get().toPromise().then(res => {
    //   res.data()
    //   return res //console.log(res)
    // })
  }


  getCompany(oid) {
    // return this.fireStore.collection('companies').doc(oid).get().toPromise().then(res => {
    //   res.data()
    //   return res //console.log(res)
    // })
  }
  getAllUsers() {
    // var arr = [] as any
    // var user: any
    // this.fireStore.collection('users').get().forEach((res) => {
    //   res.forEach((doc) => {
    //     arr.push(doc.data())
    //   })
    // })
    // return user = arr
  }
  updateUser(uid, data) {
    //console.log(uid, data)
    // this.fireStore.collection('users').doc(uid).update(data)
  }
  approvedUser(uid, status) {
    // this.fireStore.collection('users').doc(uid).update({ approved: status })
  }

  async getIsApproved(uid) {
    // return await this.fireStore.collection('users').doc(uid).get().toPromise().then((user) => user)

  }



  saveJob(job) {
    var tid = this.createID();
    var trackingNo = job.data[0].do_number;
    if (job.data[0].type == 'Delivery') {
      this.fireStore.collection('tripsDelivery').doc(trackingNo).set(job.data[0]).then(res => {
        // console.log(res)
      })
    } else {
      this.fireStore.collection('tripsCollection').doc(trackingNo).set(job.data[0]).then(res => {
        // console.log(res)
      })
    }

  }

  getJobsFireBase() {
    // this.fireStore.collection('tripsDelivery').get().subscribe(res => {
    //   res.docs.map(m => {
    //     var resp
    //     resp = m.data()
    //     console.log(resp)
    //   })
    // })
    // Create a query against the collection.
    //tripsCollection




    // this.fireStore.collection('tripsDelivery').snapshotChanges().forEach(res => {
    //   var d = res.map
    //   console.log(d)
    // })

    var date = new Date(Date.parse("2020-10-21")).toISOString()
    console.log(date)
    this._data.database.app.firestore().collection('tripsDelivery')//.where('status', '==', 'Delivered')
      .where("submitted_at", ">=", date).where("submitted_at", "<=", date).onSnapshot(res => {
        res.docs.forEach(res => {
          console.log(res.data())
        })


      });

  }


}
