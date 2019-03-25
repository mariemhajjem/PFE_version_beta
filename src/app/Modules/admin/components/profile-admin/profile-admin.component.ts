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
  currentUser: any={
                                         
    };
  email:string;
 id: string;
  constructor(
    private route: ActivatedRoute,
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
       prenom :    ['', Validators.required] ,    
       tel :    ['', Validators.required] ,    
    });
  }
 
 
  ngOnInit() {
        // Autopopulates the input fields with the selected document data.
      /*  this.route.params.subscribe(params => {
          this.id = params.id;
          this.userService.getUserById(this.id).subscribe(res => {
           this.currentUser = res;
           this.updateForm.get('email').setValue(this.currentUser.email);
            
     })
   }) */

   let decodeToken  = this.authService.getUserDetails();
    // Load the current user's data
   this.email =decodeToken['email'];
   this.id= decodeToken['id'];
    // this.email = this.authService.getUserDetails();
     this.updateForm.get('email').setValue(this.email);
     
     // this.setData();
    
  }


 setData(){

       this.currentUser.email=this.email;
 }

       // Updates the document with input data and redirects to  
updateUser(currentUser,email,nom,prenom,tel) {
  currentUser.email=email;
  currentUser.nom=nom;
  currentUser.prenom=prenom;
  currentUser.tel=tel;

  //this.route.params.subscribe(params => {
  this.userService.updateUser(this.id,currentUser).subscribe(() => {
    this.router.navigate(['/admin/profileadmin']);
 // });
})}

}
