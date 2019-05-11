import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import Formation from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private formations: Formation[] = [];
  private formationUpdated = new Subject<Formation[]>();
  uri = 'http://localhost:3000/formation';
  constructor(private http: HttpClient) { }
  private refreshNeeds = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeds;
  }

  addFormation(nameFormation: string, type: string, imageUrl: File,D: string,Sujet: string ) {
    const formationData = new FormData();
    formationData.append("nameFormation", nameFormation);
    formationData.append("type", type);
    formationData.append("imageUrl", imageUrl);
    formationData.append("Description", D);

    formationData.append("Sujet", Sujet);


    this.http.post(`${this.uri}/add`, formationData)
    .subscribe(res => console.log('Done'));
  }

  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }
  getThree() {
    return this
           .http
           .get(`${this.uri}/limit`);
  }
  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  updateBusiness(nameFormation: string, type: string, imageUrl: File,D: string,Sujet: string, id) {

    const formationData = new FormData();
    formationData.append("nameFormation", nameFormation);
    formationData.append("type", type);
    formationData.append("imageUrl", imageUrl);
    formationData.append("Description", D);

    formationData.append("Sujet", Sujet);
    this
      .http
      .put(`${this.uri}/update/${id}`, formationData).pipe(tap(()=>{
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
