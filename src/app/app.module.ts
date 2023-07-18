import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { appRouter } from './app.router';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    UsersModule,
    LoginModule,
    appRouter,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
