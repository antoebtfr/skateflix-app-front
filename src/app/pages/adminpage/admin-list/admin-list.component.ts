import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/class/user';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  public adminList: User[];
  constructor(private userService: UserService) { }

   ngOnInit() {
    this.userService.getAll().subscribe(data => this.adminList = data.filter(x => x.isAdmin === true));
  }

}
