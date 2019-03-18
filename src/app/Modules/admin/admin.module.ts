import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormationService } from './formations/formation.service';
import { FormationModule } from './formations/formation.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
     HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormationModule,
    
    FormsModule
   
  ],
  providers: [ ],
})
export class AdminModule { }
