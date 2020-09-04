import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserConf } from 'src/app/variable-globale/user-conf';

@Component({
  selector: 'app-profil-section',
  templateUrl: './profil-section.component.html',
  styleUrls: ['./profil-section.component.scss']
})
export class ProfilSectionComponent implements OnInit {

  constructor(private userConf: UserConf) { }
  public currentUser;

  ngOnInit() {
    this.actualyseUser();
  }

  private actualyseUser() {
    this.currentUser = this.userConf.getUserInfo();
  }

}
