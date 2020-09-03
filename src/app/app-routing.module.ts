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
  { path: 'admin', loadChildren: () => import('./pages/adminpage/adminpage.module').then(m => m.AdminpageModule) },
  { path: 'settings', loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsModule) },
  { path: 'smartphone-app', loadChildren: () => import('./pages/smartphone-app/smartphone-app.module').then(m => m.SmartphoneAppModule) },
  { path: 'informations', loadChildren: () => import('./pages/legals/legals.module').then(m => m.LegalsModule) },
  { path: 'post-video', loadChildren: () => import('./pages/post-video/post-video.module').then(m => m.PostVideoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
