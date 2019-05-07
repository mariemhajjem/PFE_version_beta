import { FormListComponent } from './components/form-list/form-list.component';
import { CrudComponent } from './components/crud/crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';

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
     CrudUsersComponent, ListUserComponent, EditFormationComponent, ProfileAdminComponent,DemandesComponent, ProfileComponent, PartenaireComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AccordionModule,
    CardModule,
    TabViewModule,
     Ng2SearchPipeModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [
     FormationService,
     UserService,
     AuthGuard
    ],
})
export class AdminModule { }
