import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locals',
  templateUrl: './locals.component.html',
  styleUrls: ['./locals.component.scss']
})
export class LocalsComponent implements OnInit {
  public localVideos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }

  ngOnInit() {
  }

}
