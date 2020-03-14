import { Component, OnInit } from '@angular/core';
import { ModalConf } from 'src/app/variable-globale/modal-conf';
import { UserConf } from 'src/app/variable-globale/user-conf';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private modalConf: ModalConf, private userConf: UserConf) { }

  ngOnInit() {
    this.sidebarStatus();
  }

  public sidebarStatus() {
    return this.modalConf.getSidebarStatus();
  }

  public closeSidebar() {
    this.modalConf.closeSidebar();
  }

  public connectedStatus(){
    return this.userConf.getConnexionStatus();
  }

}
