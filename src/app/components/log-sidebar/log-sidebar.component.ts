import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-sidebar',
  templateUrl: './log-sidebar.component.html',
  styleUrls: ['./log-sidebar.component.scss']
})
export class LogSidebarComponent implements OnInit {

  public connectionFormOpen = true;
  constructor() { }

  ngOnInit() {
  }

}
