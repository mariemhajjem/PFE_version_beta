import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../admin/components/models/user';
import { Router } from '@angular/router';
import { AuthorizationService } from '../admin/components/services/authorization.service';
import { JwtHelperService } from '@auth0/angular-jwt/src/jwthelper.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   
  private url="http://localhost:3000/api/auth"
  
  
  constructor(private http: HttpClient,private router: Router,private jwtHelperService: JwtHelperService) { 
     
  }

 
     registerUser(user){
       return this.http.post<any>(`${this.url}/register`,user)
     }
     loginUser(user){
       return this.http.post<any>(`${this.url}/login`,user)
     }

   /* public get loggedIn(): boolean{
      return localStorage.getItem('access_token') !==  null;
    } */
    public getUserDetails() {
      const token = this.getJwtToken();
       
      
       return this.getPayload(token) ;
    }
    
   getPayload(token){
    // decode token to read the payload details
    const decodeToken = this.jwtHelperService.decodeToken(token);
       return decodeToken;

    }

     isLoggedIn() {
      return  !!this.getJwtToken();
    }
  
     getJwtToken() {
      return localStorage.getItem('token');
    }
    logout() {
      localStorage.removeItem('token');
      this.router.navigate(['/']);
    } 

  }

