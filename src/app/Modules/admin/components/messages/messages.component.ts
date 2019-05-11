import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/api';
import { MessageService } from 'src/app/Modules/client/service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  columns =  ['#','Email','Message','Supprimer'];
  messages : any[];
  message : any;
  public searchText;
  msgs: Message[] = [];
  constructor(private demandeService : MessageService,private confirmationService: ConfirmationService) { }
  confirm1() {
    this.confirmationService.confirm({
        message: 'Voulez-vous confirmer cette demande?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Vous avez accepté'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'Vous avez rejeté'}];
        }
    });
}

confirm2(demande) {
    this.confirmationService.confirm({
        message: 'Voulez-vous supprimer cette demande?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.demandeService.delete(demande._id).subscribe( data => { 
            this.messages.splice(this.messages.indexOf(demande), 1 );
              },
             error => {
                 console.log(error);
                });
            this.msgs = [{severity:'info', summary:'Confirmé', detail:'Demande supprimée'}];
      },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejeté', detail:'Vous avez rejeté'}];
        }
    });
}
  ngOnInit() {
    this.demandeService.refreshNeed.subscribe(() => {
      this.fetchDemandes();
    });
    this.fetchDemandes(); 
    
  }
  confirm() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
        accept: () => {
            //Actual logic to perform a confirmation
        }
    });
}
  fetchDemandes() {
     this.demandeService.getMessages().subscribe((data: any[]) =>{
       this.messages = data;
     } )
  }
  

  deleteDemande(demande) {
   
      this.demandeService.delete(demande._id).subscribe( data => { 
        this.messages.splice(this.messages.indexOf(demande), 1 );
          },
         error => {
             console.log(error);
            });
       
  }

}
