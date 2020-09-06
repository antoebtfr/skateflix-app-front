import { Video } from './../../../shared/class/video';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { VideoService } from 'src/app/shared/service/video.service';
import { UserConf } from 'src/app/variable-globale/user-conf';

@Component({
  selector: 'app-video-section',
  templateUrl: './video-section.component.html',
  styleUrls: ['./video-section.component.scss']
})
export class VideoSectionComponent implements OnInit {
  @ViewChild('video_container', {static: true}) videoContainer: ElementRef;
  @ViewChild('filter_container', {static: true}) filterContainer: ElementRef;

  public changeFilterContainerHeight = false;
  public topVideo: Video;
  public videoList = [];
  private id: number;

  constructor(private videoService: VideoService, private userConf: UserConf) { }

   ngOnInit() {
    this.updateVideoList();
    this.reduceFiltersContainer();
    this.updateId();
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
     this.videoService.get().subscribe(data => {
       this.videoList = data.filter(x => x.userId == this.id);
       console.log(this.videoList);
       this.topVideo = data[data.length - 1];
       console.log(this.topVideo);
      });
  }

  private updateId() {
    this.id = this.userConf.getUserInfo().id;
    console.log('Salut');
  }

}
