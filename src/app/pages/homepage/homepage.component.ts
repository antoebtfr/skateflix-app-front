import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'src/app/variable-globale/variable-global';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private varglo: VariablesGlobales) { }

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
