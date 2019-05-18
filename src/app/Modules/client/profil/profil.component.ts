import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../admin/components/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../admin/components/models/user';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  updateForm: FormGroup;
  currentUser: any ={
     
    email: '',
    password: '',
    nom: '',
    prenom: '',
    role: '',
    tel: 0,
    age: 0,
    Niveau : '',
    etude: '',
    competences: [''],
  };
  email:string;
 id: string;
 updated : boolean;
  constructor(
    private authService: AuthService, 
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder, private messageService: MessageService
  ) {
    this.createForm();
  }

  createForm() {
    this.updateForm = this.fb.group({
       
      email: ['', [Validators.required,Validators.email]] ,
      nom :    ['', Validators.required] ,            
      prenom : ['', Validators.required] ,    
      tel :    ['', Validators.required] ,    
    });
  }
 
 
  ngOnInit() {
       this.authService.getProfile().subscribe((data : any) => {
       this.currentUser= data ; 
       console.log(this.currentUser._id)
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
   console.log(this.currentUser.id)
  this.userService.updateUser(this.currentUser._id,currentUser).subscribe(() => {
    
    this.messageService.add({severity: 'info', summary: 'Succès', detail: 'Profil modifié'});
    this.router.navigate(['/']);
})}

}
