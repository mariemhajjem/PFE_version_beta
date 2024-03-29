import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route,Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Modules/auth/auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(  private authService: AuthService,private router: Router) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
       var token = this.authService.getJwtToken();
     if(this.authService.isAdmin()) return true   ;
     else { 
       this.router.navigate(['/forbidden']);
       return false;}
           
                
    }
                        
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
