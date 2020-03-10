import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcribing',
  templateUrl: './subcribing.component.html',
  styleUrls: ['./subcribing.component.scss']
})
export class SubcribingComponent implements OnInit {
  public subscribingVideos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }

  ngOnInit() {
  }

}
