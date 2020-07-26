import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public clicked = '';

  constructor() { }

  ngOnInit() {
  }

  public changeClicked(x) {
    this.clicked = '';
    this.clicked = x ;
  }

}
