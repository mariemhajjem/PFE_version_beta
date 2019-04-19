import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Notfound404Component } from './Modules/notfound404/notfound404.component';
 
const routes: Routes = [
  { path: '404',component: Notfound404Component}
];

@NgModule({
  declarations: [
     
  ],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule], 
  providers: [ AuthGuard] 
})
export class AppRoutingModule { }
