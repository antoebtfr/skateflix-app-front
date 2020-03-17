import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit, AfterViewInit {
  public selectedTopic = 'video';
  public testArray = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  constructor() { }
  @ViewChild('filter_container', {static: true}) filterContainerRef: ElementRef;
  public filterContainerCSS = document.getElementById('filter-container');

  ngOnInit() {
    this.stickFilters();
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

  private stickFilters() {
    if (this.filterContainerRef.nativeElement.offsetTop <= 0) {
      this.filterContainerRef.nativeElement.style.posittion = 'sticky' ;
      this.filterContainerRef.nativeElement.style.top = '0' ;
      alert();
    }
  }

}
