import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit, AfterViewInit {
  public selectedTopic = 'video';

  constructor() { }
  @ViewChild('filter_container', {static: true}) filterContainerRef: ElementRef;
  public filterContainerCSS = document.getElementById('filter-container');

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log( this.filterContainerRef );
  }

  public switchTopic(topic: string) {
    this.selectedTopic = topic;
  }

  public test() {
    console.log(this.filterContainerRef);
    console.log(this.filterContainerCSS);

  }

}
