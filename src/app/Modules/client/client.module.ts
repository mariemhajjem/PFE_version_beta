import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemandesdevisComponent } from './demandesdevis/demandesdevis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from '../auth/auth.module';
import { BodyComponent } from './body/body.component';
import { SliderComponent } from './slider/slider.component';
import { FormationsComponent } from './formations/formations.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ContactComponent } from './contact/contact.component';
import { FormulaireformationComponent } from './formulaireformation/formulaireformation.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ChatService } from './services/chat.service';
 

@NgModule({
  declarations: [ DemandesdevisComponent, NavbarComponent, BodyComponent, SliderComponent, FormationsComponent, EquipeComponent, ContactComponent, FormulaireformationComponent, RechercheComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    HttpClientModule
  ] ,
  providers: [ChatService]
})
export class ClientModule { }
