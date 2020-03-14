import { Component, OnInit } from '@angular/core';
import { ModalConf } from 'src/app/variable-globale/modal-conf';

@Component({
  selector: 'app-log-sidebar',
  templateUrl: './log-sidebar.component.html',
  styleUrls: ['./log-sidebar.component.scss']
})
export class LogSidebarComponent implements OnInit {

  constructor(private modalConf: ModalConf) { }

  ngOnInit() {
    this.status();
  }

  public status() {
    return this.modalConf.getConnectionModalStatus();
  }

}
