import { Video } from './../../../shared/class/video';
import { VideoService } from 'src/app/shared/service/video.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  public videoList: Video[];

  ngOnInit() {
    this.videoService.get().subscribe(data => this.videoList = data);
  }


}
