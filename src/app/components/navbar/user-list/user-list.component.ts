import { ModalConf } from 'src/app/variable-globale/modal-conf';
import { UserConf } from 'src/app/variable-globale/user-conf';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userConf: UserConf, private modalConf: ModalConf) { }

  ngOnInit() {
  }

  public disconnect() {
    this.userConf.disconnect();
  }

  public switchSettingsTabs(tab: string) {
    this.modalConf.switchSettingsTab(tab);
    console.log(this.modalConf.getSettingsTab());
  }

}
