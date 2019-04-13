import { Component, OnInit } from '@angular/core';
import { Demande } from '../models/DemandeDevis';
import { DemandeService } from 'src/app/Modules/client/service/demande.service';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {
  columns =  ['#','Email','Entreprise','Afficher','Supprimer'];
  demandes : Demande[];
  demande : Demande;
  constructor(private demandeService : DemandeService) { }

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

  deleteDemande(demande) {
      this.demandeService.delete(demande._id).subscribe( data => { 
        this.demandes.splice(this.demandes.indexOf(demande), 1 );
          },
         error => {
             console.log(error);
            });
       
  }
}
