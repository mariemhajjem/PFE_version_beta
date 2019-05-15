import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  private url="http://localhost:3000/demande";

  constructor(private http: HttpClient, private messageService: MessageService) { }
  private refreshNeeds = new Subject<void>();

  get refreshNeed() {
    return this.refreshNeeds;
  }
  sendDemande(Nom: string, Prenom: string, Tel: string, Email: string, Adresse: string, Entreprise: string, Fonction : string, DomaineActivite: string, Description: string, Message: string, cahierDeCharge: File ,Services: string) {
    const demande = new FormData();
    demande.append("Nom", Nom);
    demande.append("Prenom", Prenom);
    demande.append("Tel", Tel);
    demande.append("Email", Email);
    demande.append("Adresse", Adresse);
    demande.append("Entreprise", Entreprise);
    demande.append("Fonction", Fonction);
    demande.append("DomaineActivite", DomaineActivite);
    demande.append("Description", Description);
    demande.append("Message", Message);
    demande.append("Services", Services);
    demande.append("cahierDeCharge", cahierDeCharge);
    this.http.post(`${this.url}/Create`, demande)
    .subscribe(res => {console.log('Done');this.messageService.add({severity: 'info', summary: 'Succès', detail: 'Demande de devis envoyée'});});
  }
  getDemandes(){
    return this.http.get(`${this.url}/List`)
  }
  getUneDemande(id){
    return this.http.get(`${this.url}/GetOne/${id}`);
  }
  delete(id){
    return this.http.delete(`${this.url}/DeleteOne/${id}`);
  }
  sendMessageConfirmation(id) {
    console.log(id);
    this.http.post(`${this.url}/sendConfirmation/${id}`, id)
        .subscribe(res => console.log('Done'));
  }
  sendMessageRefusé(id) {
    console.log(id);
    this.http.post(`${this.url}/sendRefuse/${id}`, id)
        .subscribe(res => console.log('Done'));
  }
}
