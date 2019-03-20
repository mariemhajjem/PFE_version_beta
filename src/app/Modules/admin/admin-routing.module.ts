import { EditFormationComponent } from './components/edit-formation/edit-formation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListUserComponent } from './components/list-user/list-user.component';
import { CrudComponent } from './components/crud/crud.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { HomeComponent } from './components/home/home.component';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';


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
    { path: 'addFormation', component: CrudComponent },
    { path: 'listFormation', component: FormListComponent },
    {path: 'editFormation/:id', component: EditFormationComponent},
    { path: 'users', component: ListUserComponent },
    { path: 'editUser/:id', component: CrudUsersComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
