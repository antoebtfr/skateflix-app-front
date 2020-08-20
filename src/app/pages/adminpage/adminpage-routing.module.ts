import { ChatboxComponent } from './chatbox/chatbox.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpageComponent } from './adminpage.component';
import { AdminSidebarComponent } from 'src/app/components/admin-sidebar/admin-sidebar.component';
import { AdminListComponent } from './admin-list/admin-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth'},
  { path: 'auth', component: AdminAuthComponent},
  { path: 'dashboard', component: AdminpageComponent},
  { path: 'ip', component: AdminSidebarComponent},
  { path: 'admin-list', component: AdminListComponent},
  { path: 'chatbox', component: ChatboxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
