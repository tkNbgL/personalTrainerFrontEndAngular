import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ConfigServiceLogin } from './config/services/login-service';
import { ConfigServiceUser } from './config/services/user-service';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ConfigServiceLogin,
    ConfigServiceUser
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
