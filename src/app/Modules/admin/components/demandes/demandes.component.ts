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

  columns =  ['#','Email','Tel','Services','Entreprise','CDC','Confirmer','Supprimer'];
  demandes : Demande[];
  demande : Demande;
  public searchText;
  msgs: Message[] = [];
  checked2: boolean = true;
  confirm : boolean =false;
  constructor(private demandeService : DemandeService,private confirmationService: ConfirmationService) { }

  confirm1(demande) {
    this.confirmationService.confirm({
        message: 'Voulez-vous confirmer cette demande?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'Vous avez accepté'}];
            this.demandeService.sendMessageConfirmation(demande._id);
            this.confirm= true;
            this.demandeService.update(demande._id,this.confirm).subscribe(res => {});;
            this.fetchDemandes();
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
            this.msgs = [{severity:'info', summary:'Confirmé', detail:'Demande supprimée'}];
            this.demandeService.sendMessageRefusé(demande._id);
            this.deleteDemande(demande);
            this.demandeService.refreshNeed.subscribe(() => {
              this.fetchDemandes();
            });
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejeté', detail:'Vous avez rejeté'}];
        }
    });
}
deleteDemande(demande) {

      this.demandeService.delete(demande._id).subscribe( data => {
        this.demandes.splice(this.demandes.indexOf(demande), 1 );
          },
         error => {
             console.log(error);
            });

  }
  ngOnInit() {
    this.demandeService.refreshNeed.subscribe(() => {
      this.fetchDemandes();
    });
    this.fetchDemandes();

  }

  fetchDemandes() {
     this.demandeService.getDemandes().subscribe((data: Demande[]) =>{
       this.demandes = data;
     } )
  }
  download(demande){
    this.demandeService.download(demande._id).subscribe((data) => {
     var blob = new Blob([data], {type: 'application/pdf'});

  var downloadURL = window.URL.createObjectURL(data);
  var link = document.createElement('a');
  link.href = downloadURL;
  link.download = "cahierDeCharge.pdf";
  link.click();
  })
  }


}
