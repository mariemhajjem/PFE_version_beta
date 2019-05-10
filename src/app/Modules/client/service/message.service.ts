import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url="http://localhost:3000/message";

  constructor(private http: HttpClient) { }
  private refreshNeeds = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeds;
  }
  sendMessage(message){
    return this.http.post(`${this.url}/create`, message).subscribe(res => console.log('Done'));
   }
  getMessages(){
    return this.http.get(`${this.url}/List`)
  }
  delete(id){
    return this.http.delete(`${this.url}/DeleteOne/${id}`).pipe(tap(()=>{
      this.refreshNeed.next();
    }));;
  }
}
