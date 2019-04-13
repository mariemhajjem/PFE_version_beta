import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';
 
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
   columns =  ['#','id','Email','Supprimer'];
   users: User[];
    
  constructor(private userService: UserService,private router :Router) {}

  ngOnInit() {
    this.userService.refreshNeed.subscribe(() => {
      this.fetchUsers();
    });
       this.fetchUsers(); 
   }
   // Fetches all Users documents.
 fetchUsers() {
  this.userService
    .getAll()
    .subscribe((data : User[]) => {
      this.users = data;
    });
  }
 
  

// Deletes the selected issue and refreshes the document view.
deleteUser(user) {
  this.userService.deleteUser(user._id).subscribe( 
    data => { 
      this.users.splice(this.users.indexOf(user), 1 );
        },
       error => {
           console.log(error);
          }
  );
   
}


}
