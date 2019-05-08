import { Component, OnInit } from '@angular/core';
import { Demande } from '../models/DemandeDevis';
import { DemandeService } from 'src/app/Modules/client/service/demande.service';
import { ConfirmationService, Message } from 'primeng/api';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  columns =  ['#','Email','Entreprise','Afficher','Supprimer'];
  demandes : Demande[];
  demande : Demande;
  public searchText;
  msgs: Message[] = [];
  constructor(private demandeService : DemandeService,private confirmationService: ConfirmationService) { }
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
            this.demandes.splice(this.demandes.indexOf(demande), 1 );
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
     this.demandeService.getDemandes().subscribe((data: Demande[]) =>{
       this.demandes = data;
     } )
  }
  

  deleteDemande(demande) {
   
      this.demandeService.delete(demande._id).subscribe( data => { 
        this.demandes.splice(this.demandes.indexOf(demande), 1 );
          },
         error => {
             console.log(error);
            });
       
  }
}
