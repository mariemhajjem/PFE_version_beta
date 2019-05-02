import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  
  private url="http://localhost:3000/cmt";
  
  constructor(private http: HttpClient) { } 
 
  sendCmt(id,Sujet){
   return this.http.post(`${this.url}/${id}`,Sujet).subscribe();
  }
}
