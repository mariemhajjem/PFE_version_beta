import { Component, OnInit } from '@angular/core';
import { User } from '../../admin/components/models/user';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Role } from '../../admin/components/models/role';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  currentUser: User;
  constructor() { 
    
    }

  ngOnInit() {
  }

 

}
