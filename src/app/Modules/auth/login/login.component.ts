import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;


  constructor(private auth: AuthService,private router : Router, private fb: FormBuilder) { }
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
     let registerUserData = {
    email: email,
    password: password
  };
    this.auth.loginUser(registerUserData)
    .subscribe(
      res => {this.router.navigate(['/']),
      localStorage.setItem('token', res.token)} ,
      err => { console.log(err); this.router.navigate(['/auth/login']);})
  }




}
