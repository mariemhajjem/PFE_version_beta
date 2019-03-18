import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './formations/crud/crud.component';
import { FormListComponent } from './formations/form-list/form-list.component';

const routes: Routes = [
  {
  path : 'admin',
  component : CrudComponent,
  
  children: [
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    {
      path: 'admin/formation',
      component: FormListComponent
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
