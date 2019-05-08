import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
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
    password: password,
    role : 'User',
    panier : ['5cbbb748c4745105c003ca55']
  }
    this.auth.registerUser(registerUserData)
    .subscribe(
      res => {this.router.navigate(['/']),
      localStorage.setItem('token', res.token)} ,
      err => console.log(err)
    )
  }

}
