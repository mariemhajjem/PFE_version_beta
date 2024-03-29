import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Modules/auth/auth.module';
import { AdminRoutingModule } from './Modules/admin/admin-routing.module';
import { AuthGuard } from './auth.guard';
import { AdminModule } from './Modules/admin/admin.module';
import { ClientModule } from './Modules/client/client.module';
import { AuthService } from './Modules/auth/auth.service';
import { JwtModuleOptions, JwtModule } from '@auth0/angular-jwt';
import { Notfound404Component } from './Modules/notfound404/notfound404.component';
import { TokenInterceptorService } from './token-interceptor.service';
 import {ToastModule} from 'primeng/toast';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: function  tokenGetter() {
        return     localStorage.getItem('token');},
      whitelistedDomains: ['localhost:4200/admin']
  }
};

@NgModule({
  declarations: [
    AppComponent,
    Notfound404Component
  ],
  imports: [ 
    BrowserModule,
    HttpClientModule,
    AdminModule,
    ClientModule,
    AuthModule,
    AppRoutingModule,
    AdminRoutingModule,
    ToastModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  
  providers: [
     AuthGuard,
  AuthService,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true

  }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
