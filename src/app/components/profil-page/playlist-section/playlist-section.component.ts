import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-section',
  templateUrl: './playlist-section.component.html',
  styleUrls: ['./playlist-section.component.scss']
})
export class PlaylistSectionComponent implements OnInit {
  public PlaylistList = [];

  constructor() { }

  ngOnInit() {
  }

}
