import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../service/navbar.service';
import { DemandeService } from '../service/demande.service';
import { Demande } from '../../admin/components/models/DemandeDevis';
import { MessageService } from 'primeng/api';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demandesdevis',
  templateUrl: './demandesdevis.component.html',
  styleUrls: ['./demandesdevis.component.css']
})
export class DemandesdevisComponent implements OnInit {
  constructor(public nav: NavbarService, private demandeService: DemandeService, private messageService: MessageService) { }

  form: FormGroup;
  cahierDeCharge: any;
  isLoading = false;
  demande: Demande;
  submitted = false;
   Services : string[];
  ngOnInit() {
    this.nav.hide();
    this.form = new FormGroup({
      Nom: new FormControl(null, {validators: [Validators.required]}),
      Prenom: new FormControl(null, { validators: [Validators.required] }),
      Tel: new FormControl(null, {validators: [Validators.required] }),
      Email: new FormControl(null, { validators:[Validators.required, Validators.email]}),
      Adresse: new FormControl(null, { validators: [Validators.required] }),
      Entreprise: new FormControl(null, { validators: [Validators.required] }),
      Fonction: new FormControl(null, { validators: [Validators.required] }),
      DomaineActivite: new FormControl(null, { validators: [Validators.required] }),
      Description: new FormControl(null, { validators: [Validators.required] }),
      Message: new FormControl(null),
      Services: new FormControl(null, { validators: [Validators.required] }),
      cahierDeCharge: new FormControl(null, { validators: [Validators.required] }),
    });
  }
  onFilePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ cahierDeCharge: file });
    this.form.get('cahierDeCharge').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.cahierDeCharge = reader.result;
    };
    reader.readAsDataURL(file);
  }
  send(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
         
    this.demandeService.sendDemande(
      this.form.value.Nom,
      this.form.value.Prenom,
      this.form.value.Tel,
      this.form.value.Email,
      this.form.value.Adresse,
      this.form.value.Entreprise,
      this.form.value.Fonction,
      this.form.value.DomaineActivite,
      this.form.value.Description,
      this.form.value.Message,
      this.form.value.cahierDeCharge,
      this.form.value.Services
    );
    
  }

}
