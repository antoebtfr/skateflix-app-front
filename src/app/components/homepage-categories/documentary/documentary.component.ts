import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/service/video.service';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.scss']
})
export class DocumentaryComponent implements OnInit {
  public documentaryVideos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public testArray = [];
  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.get().subscribe(data => this.testArray = data.filter(x => x.category === 'documentaire'));
    this.click();
  }

  private click() {
    document.addEventListener('click', () => console.log(this.testArray));
  }

}
