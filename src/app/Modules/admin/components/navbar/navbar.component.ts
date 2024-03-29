import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Modules/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthService) { }
  public searchText;
  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }
}
