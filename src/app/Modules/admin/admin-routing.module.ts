import { EditFormationComponent } from './components/edit-formation/edit-formation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 

import { ListUserComponent } from './components/list-user/list-user.component';
import { CrudComponent } from './components/crud/crud.component';
import { FormListComponent } from './components/form-list/form-list.component';
import { HomeComponent } from './components/home/home.component';
import { CrudUsersComponent } from './components/crud-users/crud-users.component';
import { AuthGuard } from 'src/app/auth.guard';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
 


const routes: Routes = [
  {
  path : 'admin',
  component : NavbarComponent,
  canActivate : [AuthGuard],
  canActivateChild :[AuthGuard],

  children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      component: HomeComponent
    },
    { path: 'addFormation', component: CrudComponent },
 
    { path: 'users', component: ListUserComponent },
    { path: 'editUser/:id', component: CrudUsersComponent },
 
    { path: 'listFormation', component: FormListComponent },
    {path: 'editFormation/:id', component: EditFormationComponent},
    { path: 'profileadmin', component: ProfileAdminComponent }
 
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
