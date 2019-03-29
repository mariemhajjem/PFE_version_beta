import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemandesdevisComponent } from './demandesdevis/demandesdevis.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthModule } from '../auth/auth.module';
import { BodyComponent } from './body/body.component';
import { SliderComponent } from './slider/slider.component';
 

@NgModule({
  declarations: [ DemandesdevisComponent, NavbarComponent, BodyComponent, SliderComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    HttpClientModule
  ]
})
export class ClientModule { }
