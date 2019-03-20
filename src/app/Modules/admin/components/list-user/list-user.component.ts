import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
   columns =  ['#','Email','Update','Delete'];
   users: User[] = [];
   public i : number;
  constructor(private userService: UserService,private router :Router) {}

  ngOnInit() {
       this.fetchUsers(); 
   }
   // Fetches all Users documents.
 fetchUsers() {
  this.userService
    .getAll()
    .pipe(first())
    .subscribe((data:User[]) => {
      this.users = data;
    });
  }
 
  // Redirects to the /edit route.
editUser(id) {
  this.router.navigate([`/admin/edit/${id}`]);
}

// Deletes the selected issue and refreshes the document view.
deleteUser(id) {
  this.userService.deleteUser(id).subscribe(() => {
    this.fetchUsers();
  });
}


}
