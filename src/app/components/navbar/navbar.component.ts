import { Component, OnInit } from '@angular/core';
import { ModalConf } from 'src/app/variable-globale/modal-conf';
import { UserConf } from 'src/app/variable-globale/user-conf';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public userList = false;
  public test = false;
  constructor(private modalConf: ModalConf, private userConf: UserConf) {}

  ngOnInit() {
    this.closeUserList();
  }

  public openSidebar() {
    this.modalConf.openSidebar();
  }

  public connectedStatus() {
    return this.userConf.getConnexionStatus();
  }
  public showUserList() {
    setTimeout(() => {
      this.userList = true;
    }, 30);
  }

  public closeUserList() {
      addEventListener('click', () => {
        if (this.userList) {
          this.userList = false;
        }
      });
  }
}
