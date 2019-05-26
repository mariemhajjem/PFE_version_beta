import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Partenaire from '../models/partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private url="http://localhost:3000/partenaire";
  constructor(private http: HttpClient) { }
   sendDemande(name: string, job: string, imageUrl: File) {
    const PartenaireDAta = new FormData();
    PartenaireDAta.append("name", name);
    PartenaireDAta.append("job", job);
    PartenaireDAta.append("imageUrl", imageUrl);

    this.http.post(`${this.url}/Create`, PartenaireDAta)
    .subscribe(res => console.log('Done'));
  }
   getPartenaires() {
     return this.http.get(`${this.url}/List`);
   }
   getUneDemande(id) {
     return this.http.get(`${this.url}/GetOne/${id}`);
   }
   delete(id) {
     return this.http.delete(`${this.url}/DeleteOne/${id}`);
   }
}
