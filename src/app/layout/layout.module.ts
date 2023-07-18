import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from './navbar/navbar.module';
import { UsersModule } from './users/users.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    UsersModule
  ]
})
export class LayoutModule { }