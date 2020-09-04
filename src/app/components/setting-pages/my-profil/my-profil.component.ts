import { Component, OnInit } from '@angular/core';
import { UserConf } from 'src/app/variable-globale/user-conf';
import { ModalConf } from 'src/app/variable-globale/modal-conf';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.scss']
})
export class MyProfilComponent implements OnInit {

  constructor(private userConf: UserConf, private modalConf: ModalConf) { }

  public currentUser;

  ngOnInit() {
    this.actualiseCurrentUser();
  }

  private actualiseCurrentUser() {
    this.currentUser = this.userConf.getUserInfo();
  }

  public openEditModal() {
    this.modalConf.openUserEditModal();
  }

  public userEditModal() {
    return this.modalConf.getUserEditModalStatus();
  }

}
