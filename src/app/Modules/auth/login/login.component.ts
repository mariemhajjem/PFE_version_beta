import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerUserData = {
    email: '',
    password: ''
  };


  constructor(private auth: AuthService,private router : Router) { }
    ngOnInit() {
  }

  submit() {
    this.auth.loginUser(this.registerUserData)
    .subscribe(
      res => {this.router.navigate(['/']),
      localStorage.setItem('token', res.token)} ,
      err => { console.log(err); this.router.navigate(['/']);})
  }




}
