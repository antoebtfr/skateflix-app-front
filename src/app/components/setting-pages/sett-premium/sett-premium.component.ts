import { UserConf } from 'src/app/variable-globale/user-conf';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-sett-premium',
  templateUrl: './sett-premium.component.html',
  styleUrls: ['./sett-premium.component.scss']
})
export class SettPremiumComponent implements OnInit {

  constructor(
    private userService: UserService,
    private userConf: UserConf
    ) { }

    private userID: number;

  ngOnInit() {
    this.userID = this.userConf.getUserInfo().id;
  }

  public settPremium() {
    console.log(this.userID);
    const user = this.userConf.getUserInfo();
    user.isPremium = true;
    console.log(user);
    this.userService.modifyUser(this.userID, user).subscribe();
  }

}
