import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../services/sessions.service';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  constructor(private SS: SessionsService, private confirmationService: ConfirmationService) { }
  Reservations : any[];
  msgs: Message[] = [];
  ngOnInit() {
    this.SS.getReservation().subscribe( data =>
      {
        this.Reservations = data as any;
      });
  }
  confirm1(reservation) {
    this.confirmationService.confirm({
        message: 'Voulez-vous confirmer cette reservation?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Vous avez accepté'}];
            this.SS.sendMessageConfirmation(reservation._id);
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'Vous avez rejeté'}];
        }
    });
}
confirm2(reservation) {
  this.confirmationService.confirm({
      message: 'Voulez-vous supprimer cette reservation?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
          this.msgs = [{severity:'info', summary:'Confirmé', detail:'reservation supprimée'}];
          this.SS.sendMessageRefusé(reservation._id);
          this.deletereservation(reservation);
      },
      reject: () => {
          this.msgs = [{severity:'info', summary:'Rejeté', detail:'Vous avez rejeté'}];
      }
  });
}
deletereservation(reservation) {

  this.SS.deleteOrder(reservation._id).subscribe( data => {
    this.Reservations.splice(this.Reservations.indexOf(reservation), 1 );
      },
     error => {
         console.log(error);
        });

}

}
