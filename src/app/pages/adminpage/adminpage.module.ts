import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminpageRoutingModule } from './adminpage-routing.module';
import { AdminpageComponent } from './adminpage.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminSidebarComponent } from 'src/app/components/admin-sidebar/admin-sidebar.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatboxComponent } from './chatbox/chatbox.component';



@NgModule({
  declarations: [
    AdminpageComponent,
    AdminAuthComponent,
    AdminSidebarComponent,
    AdminListComponent,
    ChatboxComponent
  ],

  imports: [
    CommonModule,
    AdminpageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminpageModule { }
