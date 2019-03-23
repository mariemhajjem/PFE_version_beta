import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email: '',
    password: '',
    role : 'User'
  }
  constructor(private auth: AuthService,private router : Router) { }

  ngOnInit() {
  }
  submit() {
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res => {this.router.navigate(['/']),
      localStorage.setItem('token', res.token)} ,
      err => console.log(err)
    )
  }

}
