import { UserListComponent } from './../../../components/navbar/user-list/user-list.component';
import { HomepageEffectDirective } from './../../directive/homepage-effect.directive';
import { NavbarComponent } from './../../../components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    HomepageEffectDirective,
    UserListComponent
],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [ NavbarComponent ]
})
export class SharedModule { }
