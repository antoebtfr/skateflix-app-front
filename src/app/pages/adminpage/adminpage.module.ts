import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminpageRoutingModule } from './adminpage-routing.module';
import { AdminpageComponent } from './adminpage.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminSidebarComponent } from 'src/app/components/admin-sidebar/admin-sidebar.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { ChatboxComponent } from './chatbox/chatbox.component';
=======
import { UsersListComponent } from './users-list/users-list.component';
import { VideosListComponent } from './videos-list/videos-list.component';
import { AdminEditModalComponent } from '../../components/admin-edit-modal/admin-edit-modal.component';
>>>>>>> 8f86eba75f8c6ba5d2b0cdb75d493d51b29eb6e4



@NgModule({
  declarations: [
    AdminpageComponent,
    AdminAuthComponent,
    AdminSidebarComponent,
    AdminListComponent,
<<<<<<< HEAD
    ChatboxComponent
=======
    UsersListComponent,
    VideosListComponent,
    AdminEditModalComponent,
>>>>>>> 8f86eba75f8c6ba5d2b0cdb75d493d51b29eb6e4
  ],

  imports: [
    CommonModule,
    AdminpageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminpageModule { }
