import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private url="http://localhost:3000/session";
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${this.url}/`);
  }

}
