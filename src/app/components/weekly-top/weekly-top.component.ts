import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-top',
  templateUrl: './weekly-top.component.html',
  styleUrls: ['./weekly-top.component.scss']
})
export class WeeklyTopComponent implements OnInit {
  public weeklyVideos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }

  ngOnInit() {
  }

}
