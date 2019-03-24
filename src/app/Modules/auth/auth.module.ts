import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import{ HttpClientModule } from '@angular/common/http';
import { AuthorizationService } from '../admin/components/services/authorization.service';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: function  tokenGetter() {
        return     localStorage.getItem('token');},
      whitelistedDomains: ['localhost:4200/admin']
  }
};

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers:[
    AuthService,
    AuthorizationService
  ]
})
export class AuthModule { }
