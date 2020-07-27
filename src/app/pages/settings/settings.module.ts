import { SharedModule } from './../../shared/module/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MyProfilComponent } from './../../components/setting-pages/my-profil/my-profil.component';
import { AppConnectedComponent } from '../../components/setting-pages/app-connected/app-connected.component';
import { NotificationsComponent } from './../../components/setting-pages/notifications/notifications.component';
import { DeleteAccountComponent } from '../../components/setting-pages/delete-account/delete-account.component';
import { SettPremiumComponent } from '../../components/setting-pages/sett-premium/sett-premium.component';


@NgModule({
  declarations: [SettingsComponent, MyProfilComponent, AppConnectedComponent, NotificationsComponent, DeleteAccountComponent, SettPremiumComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    SharedModule
  ]
})
export class SettingsModule { }
