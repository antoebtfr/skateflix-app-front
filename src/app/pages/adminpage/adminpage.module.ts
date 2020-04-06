import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { AdminpageRoutingModule } from './adminpage-routing.module';
import { AdminpageComponent } from './adminpage.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';


@NgModule({
  declarations: [AdminpageComponent, AdminAuthComponent],
  imports: [
    CommonModule,
    AdminpageRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminpageModule { }
