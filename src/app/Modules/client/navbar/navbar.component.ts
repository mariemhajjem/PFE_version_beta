import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service'; 
import { NavbarService } from '../service/navbar.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navigationSubscription;
  constructor(private auth:AuthService,public nav: NavbarService,private router:Router) {  
   
  }
  initialiseInvites() {
    // Set default values and re-fetch any data you need.
    this.nav.show();
  }
 
  ngOnInit() { 
   this.initialiseInvites() ;
    this.nav.show();
    if( this.auth.isAdmin()){
     this.nav.isAdmin=true;   
   };

   if(this.auth.isLoggedIn()){
    this.nav.LoggedIn= true; 
   }
  }

 logout(){
    this.nav.isAdmin= false;
    this.nav.LoggedIn= false;
    this.auth.logout();
  
  }


}
