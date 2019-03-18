import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CrudComponent } from './Modules/admin/formations/crud/crud.component';
const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'admin/formations', component: CrudComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    CrudComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [ AuthGuard] 
})
export class AppRoutingModule { }
