import { UserListComponent } from './components/navbar/user-list/user-list.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogSidebarComponent } from './components/log-sidebar/log-sidebar.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'ip', component: UserListComponent},
  { path: 'validation', loadChildren: () => import('./pages/validation/validation.module').then(m => m.ValidationModule) },
  { path: '404-not-found' , loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: 'user', loadChildren: () => import('./pages/profil/profil.module').then(m => m.ProfilModule) },
  { path: 'admin', loadChildren: () => import('./pages/adminpage/adminpage.module').then(m => m.AdminpageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
