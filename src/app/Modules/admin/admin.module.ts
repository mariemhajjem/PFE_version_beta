import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormationService } from './formations/formation.service';
import { FormationModule } from './formations/formation.module';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { UserService } from './components/services/user.service';

@NgModule({
  declarations: [CrudUsersComponent, ListUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormationModule,
    
    FormsModule
   
  ],
  providers: [UserService],
})
export class AdminModule { }
