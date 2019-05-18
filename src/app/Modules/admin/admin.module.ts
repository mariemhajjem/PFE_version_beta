import { FormListComponent } from './components/form-list/form-list.component';
import { CrudComponent } from './components/crud/crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RadioButtonModule} from 'primeng/radiobutton';
import { AdminRoutingModule } from './admin-routing.module'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserService } from './components/services/user.service';
import { FormationService } from './components/services/formation.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EditFormationComponent } from './components/edit-formation/edit-formation.component';
import { AuthGuard } from 'src/app/auth.guard';
import { JwtModuleOptions, JwtModule } from '@auth0/angular-jwt';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { DemandesComponent } from './components/demandes/demandes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {CardModule} from 'primeng/card';
import {TabViewModule} from 'primeng/tabview';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {CalendarModule} from 'primeng/calendar';
import {ListboxModule} from 'primeng/listbox';
import { CrudSessionsComponent } from './components/crud-sessions/crud-sessions.component';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { EditSessionComponent } from './components/edit-session/edit-session.component';
import { MessagesComponent } from './components/messages/messages.component';
import { EventsComponent } from './components/events/events.component';
import { EventService } from './components/services/event.service';
import { AddEventComponent } from './components/add-event/add-event.component';
import { CrudPartenairesComponent } from './components/crud-partenaires/crud-partenaires.component';
import { GestionComponent } from './components/gestion/gestion.component';
export function getToken() {
  return localStorage.getItem('token');
 }
const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: getToken,
      whitelistedDomains: ['localhost:4200']
  }
};


@NgModule({
  declarations: [NavbarComponent, HomeComponent, CrudComponent, FormListComponent,
     CrudUsersComponent, ListUserComponent, EditFormationComponent, ProfileAdminComponent,DemandesComponent, ProfileComponent, PartenaireComponent, CrudSessionsComponent, AddSessionComponent, EditSessionComponent, MessagesComponent, EventsComponent, AddEventComponent, CrudPartenairesComponent, GestionComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    InputTextareaModule,
    FormsModule,
    AccordionModule,
    CardModule,
    TabViewModule,
    OverlayPanelModule,
    ButtonModule,
    TableModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    CalendarModule,
    ListboxModule,
     Ng2SearchPipeModule,
     RadioButtonModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [
     FormationService,
     UserService,
     EventService,
     ConfirmationService,
     AuthGuard
    ],
})
export class AdminModule { }
