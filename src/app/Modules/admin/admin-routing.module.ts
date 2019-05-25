import { EditComponent } from './components/edit/edit.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { EditSessionComponent } from './components/edit-session/edit-session.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
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
import { DemandesComponent } from './components/demandes/demandes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CrudSessionsComponent } from './components/crud-sessions/crud-sessions.component';
import { AddSessionComponent } from './components/add-session/add-session.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { EventsComponent } from './components/events/events.component';



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
    { path: 'addSession', component: AddSessionComponent },
    { path: 'addFormation', component: CrudComponent },
    { path: 'addEvent', component: AddEventComponent },
    { path: 'events', component: EventsComponent },
    { path: 'users', component: ListUserComponent },
    { path: 'editUser/:id', component: CrudUsersComponent },
    { path: 'listFormation', component: FormListComponent },
    { path: 'listSessions', component: CrudSessionsComponent },
    {path: 'editFormation/:id', component: EditFormationComponent},
    {path: 'editSessions/:id', component: EditSessionComponent},
    {path: 'editEvent/:id', component: EditComponent},
    { path: 'profileadmin', component: ProfileAdminComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'demandes', component: DemandesComponent },
    { path: 'partenaire', component: PartenaireComponent},
    { path: 'reser', component: GestionComponent},
    { path : 'messages',component: MessagesComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
