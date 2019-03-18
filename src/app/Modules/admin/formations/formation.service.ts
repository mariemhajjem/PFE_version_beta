import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  uri = 'http://localhost:8000/formation';
  constructor(private http: HttpClient) { }
  addBusiness(nameFormation, type, nb) {
    const obj = {
      nameFormation: nameFormation,
      type: type,
      nb: nb
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
