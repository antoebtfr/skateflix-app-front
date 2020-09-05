import { UserConf } from './../../../variable-globale/user-conf';
import { VideoService } from './../../../shared/service/video.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locals',
  templateUrl: './locals.component.html',
  styleUrls: ['./locals.component.scss']
})
export class LocalsComponent implements OnInit {
  public localVideos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  private location: string;
  constructor(private videoService: VideoService, private userConf: UserConf) { }

  ngOnInit() {
    this.location = this.userConf.getUserInfo().region;
    this.videoService.get().subscribe(data => this.localVideos = data.filter(x => x.location === this.location));
  }

}
