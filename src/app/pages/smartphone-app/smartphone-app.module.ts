import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmartphoneAppRoutingModule } from './smartphone-app-routing.module';
import { SmartphoneAppComponent } from './smartphone-app.component';
import { SharedModule } from 'src/app/shared/module/shared/shared.module';


@NgModule({
  declarations: [SmartphoneAppComponent],
  imports: [
    CommonModule,
    SmartphoneAppRoutingModule,
    SharedModule
  ]
})
export class SmartphoneAppModule { }
