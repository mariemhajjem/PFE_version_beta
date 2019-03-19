import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './formations/crud/crud.component';
import { FormListComponent } from './formations/form-list/form-list.component';
import { ListUserComponent } from './components/list-user/list-user.component';

const routes: Routes = [
  {
  path : 'admin',
  component : CrudComponent,
  
  children: [
    { path: '', redirectTo: 'admin', pathMatch: 'full' }

  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
