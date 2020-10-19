import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosthookService {

  constructor(private _httpClient: HttpClient, private fireStore: AngularFirestore) { }
  getSomethingFromServer(task): Observable<any> {
    // this.fireStore.collection('LLEGO').doc('trackinng')
    return this._httpClient.post('http://localhost:4200/hook', { description: task });

  }


}
