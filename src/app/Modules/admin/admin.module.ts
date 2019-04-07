import { FormListComponent } from './components/form-list/form-list.component';
import { CrudComponent } from './components/crud/crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { DemandesListComponent } from './components/demandes-list/demandes-list.component';
                     
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
     CrudUsersComponent, ListUserComponent, EditFormationComponent, ProfileAdminComponent, DemandesListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [
     FormationService,
     UserService,
     AuthGuard                             
    ],
})
export class AdminModule { }
