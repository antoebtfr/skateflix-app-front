import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.reduceFiltersContainer();
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

}
