import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;


  constructor(private auth: AuthService,private router : Router, private fb: FormBuilder, private messageService: MessageService) { }
    ngOnInit() {
      this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ] 
    });
  }
  submit(email,password) {
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
     let registerUserData = {
    email: email,
    password: password
  };
    this.auth.loginUser(registerUserData)
    .subscribe(
      res => {this.router.navigate(['/']),
      localStorage.setItem('token', res.token)} ,
      err => { this.messageService.add({severity: 'error', summary: 'Succès', detail: 'Ce compte n\'existe pas'}); this.router.navigate(['/auth/login']);})
  }




}
