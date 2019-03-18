import { FormationService } from './formation.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { CrudComponent } from './crud/crud.component';
import { FormListComponent } from './form-list/form-list.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CrudComponent, FormListComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
     ReactiveFormsModule,
    FormationRoutingModule,
   
    
  ],
  providers: [ FormationService ],
})
export class FormationModule { }