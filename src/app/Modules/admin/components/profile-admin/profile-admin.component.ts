import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
import { User } from '../models/user';
 
import { AuthService } from 'src/app/Modules/auth/auth.service';
 

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  
  currentUser: any={
    email:'',
    nom :'',
    prenom :'',
    tel:null,
    age: null,
    };
  email:string;

  ngOnInit() {
      
    // Load the current user's data
     this.email = this.authService.getUserDetails();
      this.setData();
  }
     setData(){
       this.currentUser.email=this.email;
     }
}
