import { ChatboxComponent } from './chatbox/chatbox.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpageComponent } from './adminpage.component';
import { AdminSidebarComponent } from 'src/app/components/admin-sidebar/admin-sidebar.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminEditModalComponent } from 'src/app/components/admin-edit-modal/admin-edit-modal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth'},
  { path: 'auth', component: AdminAuthComponent},
  { path: 'dashboard', component: AdminpageComponent},
<<<<<<< HEAD
  { path: 'ip', component: AdminSidebarComponent},
  { path: 'admin-list', component: AdminListComponent},
  { path: 'chatbox', component: ChatboxComponent}
=======
  { path: 'ip', component: AdminEditModalComponent},
  { path: 'admins-list', component: AdminListComponent},
  { path: 'users-list', component: UsersListComponent}
>>>>>>> 8f86eba75f8c6ba5d2b0cdb75d493d51b29eb6e4
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
