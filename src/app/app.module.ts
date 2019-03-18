import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Modules/auth/auth.module';
import { AdminRoutingModule } from './Modules/admin/admin-routing.module';
import { AuthGuard } from './auth.guard';
import { AdminModule } from './Modules/admin/admin.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    AdminRoutingModule
  ],
  
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
