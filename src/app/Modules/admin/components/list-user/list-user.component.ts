import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { first } from 'rxjs/operators';

import { Router } from '@angular/router';
import { ConfirmationService, Message } from 'primeng/api';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
   columns =  ['#','prénom','nom','Email','Supprimer'];
   users: User[];
   msgs: Message[] = [];
   public searchText;
  constructor(private userService: UserService,private router :Router,private confirmationService: ConfirmationService) {}

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

  confirm2(user) {
    this.confirmationService.confirm({
        message: 'Voulez-vous supprimer cet utilisateur?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
       
            this.msgs = [{severity:'info', summary:'Confirmé', detail:'Utilisateur supprimée'}];
            this.deleteUser(user);
            this.userService.refreshNeed.subscribe(() => {
              this.fetchUsers();
            });
                 },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejeté', detail:'Vous avez rejeté'}];
        }
    });
}


// Deletes the selected issue and refreshes the document view.
deleteUser(user) { 
  this.userService.deleteUser(user._id).subscribe(
    data => {
     this.users.splice(this.users.indexOf(user), 1 );
     console.log(data);
     this.router.navigate([this.router.url]);
        },
       error => {
           console.log(error);
          }
  );
  
}

}
