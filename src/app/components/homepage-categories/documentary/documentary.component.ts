import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentary',
  templateUrl: './documentary.component.html',
  styleUrls: ['./documentary.component.scss']
})
export class DocumentaryComponent implements OnInit {
  public documentaryVideos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }

  ngOnInit() {
  }

}
