import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
 

const routes: Routes = [
  
  { path: 'auth/login',
  component: LoginComponent
 },
  { path: 'auth/register',
  component: RegisterComponent
 },
 { path: 'forbidden',
  component: ForbiddenComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
