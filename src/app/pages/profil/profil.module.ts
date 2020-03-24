import { SharedModule } from './../../shared/module/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { VideoSectionComponent } from '../../components/profil-page/video-section/video-section.component';
import { PlaylistSectionComponent } from '../../components/profil-page/playlist-section/playlist-section.component';
import { DescriptionSectionComponent } from '../../components/profil-page/description-section/description-section.component';
import { ProfilSectionComponent } from '../../components/profil-page/profil-section/profil-section.component';

@NgModule({
  declarations: [
    ProfilComponent,
    VideoSectionComponent,
    PlaylistSectionComponent,
    DescriptionSectionComponent,
    ProfilSectionComponent,
  ],
  imports: [CommonModule, ProfilRoutingModule, SharedModule]
})
export class ProfilModule {}
