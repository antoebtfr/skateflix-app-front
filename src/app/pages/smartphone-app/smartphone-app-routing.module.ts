import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartphoneAppComponent } from './smartphone-app.component';

const routes: Routes = [{ path: '', component: SmartphoneAppComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartphoneAppRoutingModule { }
