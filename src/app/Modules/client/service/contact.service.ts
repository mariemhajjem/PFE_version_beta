import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url="http://localhost:3000/contact"


  constructor(private http: HttpClient,private router: Router) {

  }


  sendMessage(obj) {
    console.log(obj);
    this.http.post(`${this.url}/send`, obj)
        .subscribe(res => console.log('Done'));
  }


  }

