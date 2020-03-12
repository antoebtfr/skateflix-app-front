import { Component, OnInit } from '@angular/core';
import { ModalStatus } from 'src/app/global-variables/modalStatus';

@Component({
  selector: 'app-log-sidebar',
  templateUrl: './log-sidebar.component.html',
  styleUrls: ['./log-sidebar.component.scss']
})
export class LogSidebarComponent implements OnInit {

  constructor(private varglo: ModalStatus) { }

  ngOnInit() {
    this.status();
  }

  public status() {
    return this.varglo.getConnectionModalStatus();
  }

}
