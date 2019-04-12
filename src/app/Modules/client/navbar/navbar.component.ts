import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isAdmin : Object ;
LoggedIn : Object;

  constructor(private auth:AuthService) { 
    
   
  }
  
 
  ngOnInit() {
    this.isAdmin= false;
    this.LoggedIn= false;
    console.log(this.isAdmin);
    console.log(this.LoggedIn);
    if( this.auth.isAdmin()){
     this.isAdmin=true;  
     console.log(this.isAdmin);
   };

   if(this.auth.isLoggedIn()){
    this.LoggedIn= true;
    console.log(this.LoggedIn);
   }
  }
 logout(){
    this.isAdmin= false;
    this.LoggedIn= false;
    this.auth.logout();
  }


}
