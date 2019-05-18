import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemandesdevisComponent } from './demandesdevis/demandesdevis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from '../auth/auth.module';
import { SliderComponent } from './slider/slider.component';
import { FormationsComponent } from './formations/formations.component';
import { ContactComponent } from './contact/contact.component';
import { FormulaireformationComponent } from './formulaireformation/formulaireformation.component';
import { NavbarService } from './service/navbar.service';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import {ShoppingCartModule} from 'ng-shopping-cart';
import {AccordionModule} from 'primeng/accordion';
import { AboutComponent } from './about/about.component';
import {TabViewModule} from 'primeng/tabview';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PaginatorModule} from 'primeng/paginator';
import {FileUploadModule} from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { PanierComponent } from './panier/panier.component';
import { MessageComponent } from './message/message.component';
import { ButtonDemandeComponent } from './button-demande/button-demande.component';
import { EventsComponent } from './events/events.component';
import {ChipsModule} from 'primeng/chips';
import { EventService } from '../admin/components/services/event.service';
import {InputMaskModule} from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { ProfilComponent } from './profil/profil.component';
import { UserService } from '../admin/components/services/user.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [ DemandesdevisComponent, NavbarComponent, SliderComponent, FormationsComponent, ContactComponent, FormulaireformationComponent, HomeComponent, FooterComponent, PartenairesComponent, ListeFormationsComponent, FormationDetailsComponent, AboutComponent, PanierComponent, MessageComponent, ButtonDemandeComponent, EventsComponent, ProfilComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
    ShoppingCartModule,
    AccordionModule,
    TabViewModule,
    NgbModule,
    PaginatorModule,
    FileUploadModule,
    ChipsModule,
    InputMaskModule,
    ToastModule
  ] ,
  providers :[
    NavbarService,
    MessageService,
    UserService,
    AuthService,
    EventService
  ]
})
export class ClientModule { }
