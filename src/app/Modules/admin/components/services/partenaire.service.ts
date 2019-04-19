import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Partenaire from '../models/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private url="http://localhost:3000/partenaire";
  constructor(private http: HttpClient) { }
  sendDemande(partenaire) {
    return this.http.post(`${this.url}/Create`, partenaire).subscribe(res => console.log('Done'));
   }
   getDemandes() {
     return this.http.get(`${this.url}/List`);
   }
   getUneDemande(id) {
     return this.http.get(`${this.url}/GetOne/${id}`);
   }
   delete(id) {
     return this.http.delete(`${this.url}/DeleteOne/${id}`);
   }
}
