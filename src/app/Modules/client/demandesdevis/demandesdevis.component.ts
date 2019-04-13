import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { DemandeService } from '../service/demande.service';
import { Demande } from '../../admin/components/models/DemandeDevis';

@Component({
  selector: 'app-demandesdevis',
  templateUrl: './demandesdevis.component.html',
  styleUrls: ['./demandesdevis.component.css']
})
export class DemandesdevisComponent implements OnInit {
  demandeDevis :Demande={
    id:"",
    Nom: "",
    Prenom: "",
    Tel: "",
    Email: "",
    Adresse: "",
    Entreprise: "",
    Fonction : "",
    DomaineActivite: "",
    Description: "",
    Message: "", 
    cahierDeCharge: "",
 
  };
  constructor(public nav : NavbarService, private demandeService: DemandeService) { }

  ngOnInit() {
    this.nav.hide();
  }
  send(){
    this.demandeService.sendDemande(this.demandeDevis);
  }
  
}
