import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  public selectedTopic = 'video';
  constructor() { }

  ngOnInit() {
  }

  public switchTopic(topic: string) {
    this.selectedTopic = topic;
  }

}
