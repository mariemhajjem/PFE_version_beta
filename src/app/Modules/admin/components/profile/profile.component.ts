import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthService } from 'src/app/Modules/auth/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  updateForm: FormGroup;
  currentUser: User;
  email:string;
 id: string;
 updated : boolean;
  constructor(
    private authService: AuthService, 
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
       
      email: ['', Validators.required] ,
      nom :    ['', Validators.required] ,            
      prenom : ['', Validators.required] ,    
      tel :    ['', Validators.required] ,    
    });
  }
 
 
  ngOnInit() {
       this.authService.getProfile().subscribe((data :any) => {
       this.currentUser= data as User;
       console.log(data._id)
       this.updateForm.get('email').setValue(this.currentUser.email);
       this.updateForm.get('nom').setValue(this.currentUser.nom);
       this.updateForm.get('prenom').setValue(this.currentUser.prenom);
       this.updateForm.get('tel').setValue(this.currentUser.tel);
       }); 
  }


       // Updates the document with input data and redirects to  
updateUser(currentUser,email,nom,prenom,tel) {
 
  currentUser.email=email;
  currentUser.nom=nom;
  currentUser.prenom=prenom;
  currentUser.tel=tel;
 
  this.userService.updateUser(this.currentUser.id,currentUser).subscribe(() => {
    this.router.navigate(['/admin/profileadmin']);
  
})}


}
