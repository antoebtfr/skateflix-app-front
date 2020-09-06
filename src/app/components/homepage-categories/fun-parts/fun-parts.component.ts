import { VideoService } from 'src/app/shared/service/video.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun-parts',
  templateUrl: './fun-parts.component.html',
  styleUrls: ['./fun-parts.component.scss']
})
export class FunPartsComponent implements OnInit {
  public funPartsVideos = [];
  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.videoService.get().subscribe(data => this.funPartsVideos = data.filter(x => x.category === 'fun'));
  }

}
