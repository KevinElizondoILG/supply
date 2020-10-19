import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DatafireService {

  isApproved: any;
  getUid: any
  constructor(
    private fireStore: AngularFirestore,
    private http: HttpClient) {

  }

  createID() {
    return this.fireStore.createId();
  }


  getUserProfile(uid) {
    return this.fireStore.collection('users').doc(uid).get().toPromise().then(res => {
      res.data()
      return res //console.log(res)
    })
  }


  getCompany(oid) {
    return this.fireStore.collection('companies').doc(oid).get().toPromise().then(res => {
      res.data()
      return res //console.log(res)
    })
  }
  getAllUsers() {
    var arr = [] as any
    var user: any
    this.fireStore.collection('users').get().forEach((res) => {
      res.forEach((doc) => {
        arr.push(doc.data())
      })
    })
    return user = arr
  }
  updateUser(uid, data) {
    //console.log(uid, data)
    this.fireStore.collection('users').doc(uid).update(data)
  }
  approvedUser(uid, status) {
    this.fireStore.collection('users').doc(uid).update({ approved: status })
  }

  async getIsApproved(uid) {
    return await this.fireStore.collection('users').doc(uid).get().toPromise().then((user) => user)

  }



  saveJob(job) {
    var tid = this.createID();
    var trackingNo = job.data[0].do_number;
    if (job.data[0].type == 'Delivery') {
      this.fireStore.collection('tripsDelivery').doc(trackingNo).set(job.data[0]).then(res => {
        this.fireStore.collection('tripsDelivery').doc(trackingNo).update({ state: 'in_process' })
      })
    } else {
      this.fireStore.collection('tripsCollection').doc(trackingNo).set(job.data[0]).then(res => {
        this.fireStore.collection('tripsCollection').doc(trackingNo).update({ state: 'in_process' })
      })
    }

  }

  getJobsFireBase() {
    this.fireStore.collection('tripsDelivery').doc()
  }
}
