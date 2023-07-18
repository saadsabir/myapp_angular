import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './layout/login/login.module';
import { appRouter } from './app.router';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    LayoutModule,
    appRouter,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
