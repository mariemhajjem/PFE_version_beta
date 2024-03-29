import { Session } from './../models/Session';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  private url="http://localhost:3000/session";
  constructor(private http: HttpClient) { }
  private refreshNeeds = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeds;
  }
  sendsession(Session,id,formateur) {
    return this.http.post(`${this.url}/session/${id}/${formateur}`, Session).subscribe(res => console.log('Done'));
   }
  getSessions() {
     return this.http.get(`${this.url}/`);
   }
  editSession(id) {
    return this
    .http
    .get(`${this.url}/edit/${id}`);
  }
  updateSession(id, Session) {
    this.http.put(`${this.url}/update/${id}`, Session).pipe(tap(()=>{
        this.refreshNeed.next();
      }))
      .subscribe(res => console.log('Done'));
  }

  AddToCart(id){
    return this.http.post(`${this.url}/addCart/${id}`,id).subscribe(res => console.log('Done'));
  }
  GetCart(){
    return this.http.get(`${this.url}/getCart`);
  }
  Remove(id){
    return this.http.post(`${this.url}/CartdelPro/${id}`,id);
  }

   delete(id) {
     return this.http.get(`${this.url}/delete/${id}`);
   }
   AddReservation(order){
     return this.http.put(`${this.url}/postReservation`, order).subscribe(res => console.log('Done'));
   }
   getReservation(){
    return this.http.get(`${this.url}/getAllReservations`);
   }
   sendMessageConfirmation(id) {
    console.log(id);
    this.http.post(`${this.url}/sendConfirmation/${id}`, id)
        .subscribe(res => console.log('Done'));
  }
  sendMessageRefusé(id) {
    console.log(id);
    this.http.post(`${this.url}/sendRefuse/${id}`, id)
        .subscribe(res => console.log('Done'));
  }
  deleteOrder(id) {
    return this.http.get(`${this.url}/deleteOrder/${id}`);
  }
  getSessionsname() {
    return this.http.get(`${this.url}/statSession`);
  }
  getffReservation() {
    return this.http.get(`${this.url}/getReservations`);
  }
}
