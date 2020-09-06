import { VideoService } from 'src/app/shared/service/video.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-top',
  templateUrl: './weekly-top.component.html',
  styleUrls: ['./weekly-top.component.scss']
})
export class WeeklyTopComponent implements OnInit {
  public weeklyVideos = [];
  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.videoService.get().subscribe(data => this.weeklyVideos = data);
  }

}
