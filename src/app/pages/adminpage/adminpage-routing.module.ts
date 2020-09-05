import { AdminConnectedGuard } from './../../shared/guard/admin-connected.guard';
import { VideosListComponent } from './videos-list/videos-list.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpageComponent } from './adminpage.component';
import { AdminSidebarComponent } from 'src/app/components/admin-sidebar/admin-sidebar.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth'},
  { path: 'auth', component: AdminAuthComponent},
  { path: 'dashboard', canActivate: [AdminConnectedGuard], component: AdminpageComponent},
  { path: 'ip', canActivate: [AdminConnectedGuard], component: AdminSidebarComponent},
  { path: 'admins-list', canActivate: [AdminConnectedGuard], component: AdminListComponent},
  { path: 'chatbox', canActivate: [AdminConnectedGuard], component: ChatboxComponent},
  { path: 'users-list', canActivate: [AdminConnectedGuard], component: UsersListComponent},
  { path: 'videos-list', canActivate: [AdminConnectedGuard], component: VideosListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
