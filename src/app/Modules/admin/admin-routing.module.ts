import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './components/crud/crud.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
  path : 'admin',
  component : NavbarComponent,

  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent
    },
    { path: 'addFormation', component: CrudComponent }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
