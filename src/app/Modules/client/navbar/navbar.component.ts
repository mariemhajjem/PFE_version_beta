import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { logging } from 'protractor';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(private auth:AuthService,public nav: NavbarService) {  
  }
   
  ngOnInit() { 
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
