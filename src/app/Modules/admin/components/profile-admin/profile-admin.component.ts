import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
import { User } from '../models/user';
 
import { AuthService } from 'src/app/Modules/auth/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
 

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  
  updateForm: FormGroup;
  currentUser: User;
  email:string;
 id: string;
 nom : string;
 prenom : string;
 tel :Number;
 updated : boolean;
  constructor(
    private authService: AuthService, 
    private userService: UserService,
    private router: Router,
    
  ) { }
  
  ngOnInit() {
       this.authService.getProfile().subscribe((data : User) => {
         console.log(data.id);
       this.currentUser= data;
       this.email=this.currentUser.email;
       this.nom=this.currentUser.nom;
       this.prenom=this.currentUser.prenom;
       this.tel=this.currentUser.tel;
       });
        //this.route.params.subscribe(params => {});
  } 
}
