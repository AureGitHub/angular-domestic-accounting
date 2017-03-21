import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { routes } from './app.routes';
import { AuthService }      from './auth.service';
import { CanDeactivateGuard }       from './_guard/can-deactivate-guard.service';
import { AuthGuard }                from './_guard/auth-guard.service';
import { AppComponent } from './app.component';
import { LoginModule} from './login/login.module';
import { TiposgastosModule } from './tiposgastos/tiposgastos.module';

import { API_CONFIG,value } from './_config/config';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    LoginModule, 
    TiposgastosModule,

    HttpModule,
     RouterModule.forRoot(routes),
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard,{ provide: API_CONFIG, useValue: value } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
