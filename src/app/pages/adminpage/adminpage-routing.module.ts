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
  { path: 'ip', component: AdminEditModalComponent},
  { path: 'admins-list', component: AdminListComponent},
  { path: 'users-list', component: UsersListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
