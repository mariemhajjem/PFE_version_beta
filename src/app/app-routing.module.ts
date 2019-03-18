import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
 
const routes: Routes = [
];

@NgModule({
  declarations: [
     
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [ AuthGuard] 
})
export class AppRoutingModule { }
