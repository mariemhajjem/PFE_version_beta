import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  uri = 'http://localhost:3000/formation';
  constructor(private http: HttpClient) { }
  private refreshNeeds = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeds;
  }

  addBusiness(nameFormation, type, nb,imageURL) {
    const obj = {
      nameFormation: nameFormation,
      type: type,
      nb: nb,
      imageURL : imageURL
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(nameFormation, type, nb, id) {

    const obj = {
      nameFormation: nameFormation,
      type: type,
      nb: nb
    };
    this
      .http
      .put(`${this.uri}/update/${id}`, obj).pipe(tap(()=>{
        this.refreshNeed.next();
      }))
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
