import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostVideoComponent } from './post-video.component';

const routes: Routes = [{ path: '', component: PostVideoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostVideoRoutingModule { }
