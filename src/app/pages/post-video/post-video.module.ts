import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostVideoRoutingModule } from './post-video-routing.module';
import { PostVideoComponent } from './post-video.component';
import { SharedModule } from 'src/app/shared/module/shared/shared.module';


@NgModule({
  declarations: [PostVideoComponent],
  imports: [
    CommonModule,
    PostVideoRoutingModule,
    SharedModule
  ]
})
export class PostVideoModule { }
