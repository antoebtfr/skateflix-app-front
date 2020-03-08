import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'src/app/variable-globale/variable-global';

@Component({
  selector: 'app-log-sidebar',
  templateUrl: './log-sidebar.component.html',
  styleUrls: ['./log-sidebar.component.scss']
})
export class LogSidebarComponent implements OnInit {

  constructor(private varglo: VariablesGlobales) { }

  ngOnInit() {
    this.status();
  }

  public status() {
    return this.varglo.getConnectionModalStatus();
  }

}
