import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { DemandeService } from '../service/demande.service';
import { Demande } from '../../admin/components/models/DemandeDevis';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-demandesdevis',
  templateUrl: './demandesdevis.component.html',
  styleUrls: ['./demandesdevis.component.css']
})
export class DemandesdevisComponent implements OnInit {
 
  uploadedFiles: File[] = [];
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
    cahierDeCharge: this.uploadedFiles
 
  };
 

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
            this.demandeDevis.cahierDeCharge=this.uploadedFiles;
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
  constructor(public nav : NavbarService, private demandeService: DemandeService,private messageService: MessageService) { }

  ngOnInit() {
    this.nav.hide();
  }
  send(){
    this.demandeService.sendDemande(this.demandeDevis);
  }
  
}
