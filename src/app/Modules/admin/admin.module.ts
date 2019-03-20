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


@NgModule({
  declarations: [NavbarComponent, HomeComponent, CrudComponent, FormListComponent,
     CrudUsersComponent, ListUserComponent, EditFormationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FormationService, UserService],
})
export class AdminModule { }
