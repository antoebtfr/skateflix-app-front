import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { VideoService } from 'src/app/shared/service/video.service';
import { UserConf } from 'src/app/variable-globale/user-conf';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss']
})
export class VideoSectionComponent implements OnInit {
  public testArray = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  @ViewChild('video_container', {static: true}) videoContainer: ElementRef;
  @ViewChild('filter_container', {static: true}) filterContainer: ElementRef;

  public changeFilterContainerHeight = false;
  public topVideo;
  public videoList = [];
  private id: number;

  constructor(private videoService: VideoService, private userConf: UserConf) { }

  ngOnInit() {
    this.reduceFiltersContainer();
    this.updateId();
    this.updateVideoList();
    this.checkVideo();
  }


  private reduceFiltersContainer() {
    const videoContainerCSS = document.getElementById('video-container');

    videoContainerCSS.addEventListener('scroll', () => {
      if (this.videoContainer.nativeElement.scrollTop > 10) {
        this.changeFilterContainerHeight = true;
      } else {
        this.changeFilterContainerHeight = false;
      }
    });
  }

  private updateVideoList() {
     this.videoService.get().subscribe(data => this.videoList = data.filter(x => x.userId == this.id));
  }

  private updateId() {
    this.id = this.userConf.getUserInfo().id;
  }

  private updateTopVideo() {
    this.topVideo = this.videoList[this.videoList.length - 1];
  }

  private checkVideo() {
    document.addEventListener('click', () => {
      this.updateTopVideo();
      console.log(this.videoList);
      console.log(this.topVideo);
    });
  }

}
