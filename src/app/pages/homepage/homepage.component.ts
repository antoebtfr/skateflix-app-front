import { Component, OnInit } from '@angular/core';
import { ModalStatus } from 'src/app/global-variables/modalStatus';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private varglo: ModalStatus) { }

  ngOnInit() {
    this.sidebarStatus();
  }

  public sidebarStatus() {
    return this.varglo.getSidebarStatus();
  }

  public closeSidebar() {
    this.varglo.closeSidebar();
  }

}
