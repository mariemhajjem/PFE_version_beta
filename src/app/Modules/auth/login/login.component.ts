import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

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


  constructor(private auth: AuthService) { }
    ngOnInit() {
  }

  submit() {
    this.auth.loginUser(this.registerUserData)
    .subscribe(
      res => {console.log(res),
      localStorage.setItem('token', res.token);
    } ,
      err =>  console.log(err));
  }




}
