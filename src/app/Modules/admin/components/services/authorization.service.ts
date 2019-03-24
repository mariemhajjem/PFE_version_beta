import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  constructor(private jwtHelperService: JwtHelperService) {}

  isAuthorized(token): boolean {
    // check if the  token
    if (token  === null) {
      return false;
    }
 

    // decode token to read the payload details
    const decodeToken = this.jwtHelperService.decodeToken(token);

    // check if it was decoded successfully, if not the token is not valid, deny access
    if (!decodeToken) {
       
      console.log('Invalid token');
      
      return false;
    }
     if(decodeToken['role']==='Admin')
    // check if the user role  is allowed role , return true if allowed and false if not allowed
        return true;
        else
        return false;
  }

 
}