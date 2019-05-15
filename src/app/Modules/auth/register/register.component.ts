import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../admin/components/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  angForm: FormGroup;
  constructor(private auth: AuthService,private router : Router, private fb: FormBuilder) { }

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
    if (this.angForm.invalid) {
      return;
  }
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
      err => console.log(err)
    )
  }

}
