import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="http://localhost:8000/api/auth/register"

  constructor(private http: HttpClient) { }
  
     registerUser(user){
       return this.http.post<any>(this.url,user)
     }
     loginUser(user){
       return this.http.post<any>(this.url,user)
     }
  }

