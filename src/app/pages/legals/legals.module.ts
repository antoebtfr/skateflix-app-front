import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalsRoutingModule } from './legals-routing.module';
import { LegalsComponent } from './legals.component';
import { SharedModule } from 'src/app/shared/module/shared/shared.module';


@NgModule({
  declarations: [LegalsComponent],
  imports: [
    CommonModule,
    LegalsRoutingModule,
    SharedModule
  ]
})
export class LegalsModule { }
