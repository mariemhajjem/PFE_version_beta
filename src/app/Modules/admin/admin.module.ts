import { FormListComponent } from './components/form-list/form-list.component';
import { CrudComponent } from './components/crud/crud.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormationService } from './components/services/formation.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [NavbarComponent, HomeComponent, CrudComponent, FormListComponent],
  imports: [
    CommonModule,
     HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FormationService],
})
export class AdminModule { }
