import { Component, OnInit } from '@angular/core';
import { UserConf } from 'src/app/variable-globale/user-conf';

@Component({
  selector: 'app-my-profil',
  templateUrl: './my-profil.component.html',
  styleUrls: ['./my-profil.component.scss']
})
export class MyProfilComponent implements OnInit {

  constructor(private userConf: UserConf) { }

  public currentUser;

  ngOnInit() {
    this.actualiseCurrentUser();
  }

  actualiseCurrentUser(){
    this.currentUser = this.userConf.getUserInfo();
  }

}
