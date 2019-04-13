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
       this.authService.getProfile().subscribe((data : User) => {
       this.currentUser= data;
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

  //this.route.params.subscribe(params => {
  this.userService.updateUser(this.currentUser.id,currentUser).subscribe(() => {
    this.router.navigate(['/admin/profileadmin']);
 // });
})}

}
