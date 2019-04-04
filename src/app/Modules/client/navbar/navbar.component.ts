import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isAdmin = false ;
LoggedIn = false;

  constructor(private auth:AuthService) { 
    
   
  }
  
  logout(){
    this.isAdmin= false;
    this.LoggedIn= false;
    this.auth.logout();
  }
  ngOnInit() {
    if( this.auth.isAdmin()){
     this.isAdmin=true;
   };

   if(this.auth.isLoggedIn()){
    this.LoggedIn= true;
   }
  }



}
