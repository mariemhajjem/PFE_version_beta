import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route,Router, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Modules/auth/auth.service';
import { AuthorizationService } from './Modules/admin/components/services/authorization.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(  private authorizationService: AuthorizationService,private router: Router, private authenticationService: AuthService) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
       var token = this.authenticationService.getJwtToken();
     if(this.authorizationService.isAuthorized(token)) return true   ;
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
