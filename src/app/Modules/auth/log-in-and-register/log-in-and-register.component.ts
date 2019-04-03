import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in-and-register',
  templateUrl: './log-in-and-register.component.html',
  styleUrls: ['./log-in-and-register.component.css']
})
export class LogInAndRegisterComponent implements OnInit {
  loginUserData = {
    email: '',
    password: ''
  };
  registerUserData = {
    email: '',
    password: '',
    role : 'User'
  }

  constructor(private auth: AuthService,private router : Router) { }
 
    ngOnInit() {
      window.onload=function(){
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        
        signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
        });
        
        signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
        });
      }
  }

  submit() {
    this.auth.loginUser(this.loginUserData)
    .subscribe(
      res => {this.router.navigate(['/']),
      localStorage.setItem('token', res.token)} ,
      err => { console.log(err); this.router.navigate(['/404']);})
  }

  register() {
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res => {this.router.navigate(['/']),
      localStorage.setItem('token', res.token)} ,
      err => console.log(err)
    )
  }
}
