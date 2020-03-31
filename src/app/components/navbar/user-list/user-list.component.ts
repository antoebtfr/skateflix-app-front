import { UserConf } from 'src/app/variable-globale/user-conf';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private userConf: UserConf) { }

  ngOnInit() {
  }

  public disconnect(){
    this.userConf.disconnect();
  }

}
