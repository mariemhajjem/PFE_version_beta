import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../admin/components/models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private url="http://localhost:8000/api/auth"
  
  constructor(private http: HttpClient) { 
     
  }
 
     registerUser(user){
       return this.http.post<any>(`${this.url}/register`,user)
     }
     loginUser(user){
       return this.http.post<any>(`${this.url}/login`,user)
     }

   
     

  }

