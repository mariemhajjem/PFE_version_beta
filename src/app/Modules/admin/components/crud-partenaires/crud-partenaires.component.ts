import { Component, OnInit } from '@angular/core';
import { PartenaireService } from '../services/partenaire.service';
import { Router } from '@angular/router';
import { Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-crud-partenaires',
  templateUrl: './crud-partenaires.component.html',
  styleUrls: ['./crud-partenaires.component.css']
})
export class CrudPartenairesComponent implements OnInit {

  columns =  ['#','Nom','Profession','Supprimer'];
   users: any[];
   msgs: Message[] = [];
   public searchText;
  constructor(private partenaireService: PartenaireService,private router :Router,private confirmationService: ConfirmationService) {}

  ngOnInit() {
   
       this.fetchUsers();
   }
   // Fetches all Users documents.
 fetchUsers() {
  this.partenaireService
    .getPartenaires()
    .subscribe((data : any[]) => {
      this.users = data;
    });
  }

  confirm2(user) {
    this.confirmationService.confirm({
        message: 'Voulez-vous supprimer cet partenaire?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
       
            this.msgs = [{severity:'info', summary:'Confirmé', detail:'Partenaire supprimée'}];
            this.deleteUser(user);
            this.fetchUsers();
                 },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejeté', detail:'Vous avez rejeté'}];
        }
    });
}


// Deletes the selected issue and refreshes the document view.
deleteUser(user) { 
  this.partenaireService.delete(user._id).subscribe(
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
