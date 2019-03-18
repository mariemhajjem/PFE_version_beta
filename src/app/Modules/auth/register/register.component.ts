import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData={
    email: '',
    password: ''
  }
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  submit(){
    this.auth.registerUser(this.registerUserData)
    .subscribe(
      res => {console.log(res),
      localStorage.setItem('token',res.token)} ,
      err => console.log(err)
    )
  }

}
