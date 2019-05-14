import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EventService {
 
  uri = 'http://localhost:3000/event';
  constructor(private http: HttpClient) { }
  private refreshNeeds = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeds;
  }

  addEvent(name: string, date: string, imageUrl: File,Description: string,temps : string ) {
    const event = new FormData();
    event.append("name", name);
    event.append("date", date);
    event.append("imageUrl", imageUrl);
    event.append("Description", Description);
    event.append("temps", temps);


    this.http.post(`${this.uri}/create`, event).subscribe(res => console.log('Done'));
  }
  getAll(){
    return this.http.get(`${this.uri}/`)
  }
  deleteEvent(id){
    return this.http.delete(`${this.uri}/delete/${id}`)
  }
}
