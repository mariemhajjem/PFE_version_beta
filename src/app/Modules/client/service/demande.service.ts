import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private url="http://localhost:3000/demande";
  
  constructor(private http: HttpClient) { }
  private refreshNeeds = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeds;
  }
  sendDemande(demande){
   return this.http.post(`${this.url}/Create`,demande).subscribe();
  }
  getDemandes(){
    return this.http.get(`${this.url}/List`)
  }
  getUneDemande(id){
    return this.http.get(`${this.url}/GetOne/${id}`);
  }
  delete(id){ 
    return this.http.delete(`${this.url}/DeleteOne/${id}`).pipe(tap(()=>{
      this.refreshNeed.next();
    }));;
  }
}
