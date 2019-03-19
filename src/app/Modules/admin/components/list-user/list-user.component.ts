import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
      this.userService.getAll().pipe(first()).subscribe(users => { 
          this.users = users; 
      });
  }

}
