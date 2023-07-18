import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './layout/login/login.module';
import { appRouter } from './app.router';
import { LayoutModule } from './layout/layout.module';
import { AppService } from './core/services/app.service'

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
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
