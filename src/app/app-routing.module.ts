import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogSidebarComponent } from './components/log-sidebar/log-sidebar.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'homepage'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'ip', component: LogSidebarComponent},
  { path: 'validation', loadChildren: () => import('./pages/validation/validation.module').then(m => m.ValidationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
