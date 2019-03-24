import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ClientModule { }
