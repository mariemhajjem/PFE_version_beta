import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../admin/components/models/user';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  angForm: FormGroup;
  constructor(private auth: AuthService,private router : Router, private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.createForm();
  }
  
  createForm() {
    this.angForm = this.fb.group({
      email: ['', [Validators.required , Validators.email]],
      password:  ['',[Validators.required, Validators.minLength(4)]]
    });
  }
  get f() { return this.angForm.controls; }

   
      
  submit(email :string,password:string) {
    this.submitted = true;
    if(this.angForm.controls['email'].invalid && this.angForm.controls['password'].invalid){
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: "L'email ou le mot de passe entré est invalide"});
      return;
    }
    else if (this.angForm.controls['email'].invalid) { 
       this.messageService.add({severity: 'error', summary: 'Erreur', detail: "L'email entré est invalide"});
      return;
     } 
     else if(this.angForm.controls['password'].invalid){ 
      this.messageService.add({severity: 'error', summary: 'Erreur', detail: "Le mot de passe entré est invalide"});return;
    };
    
    let registerUserData :User = {
    email: email,
    password: password,
    role : 'User',
    nom: '',
    prenom: '', 
    tel: 0,
    age: 0,
    Niveau : '',
    etude: '',
    competences: [], 
  }
    this.auth.registerUser(registerUserData)
    .subscribe(
      res => {this.router.navigate(['/']),
      localStorage.setItem('token', res.token)} ,
      err => this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Ce compte existe déjà'})
    )
  }

}
