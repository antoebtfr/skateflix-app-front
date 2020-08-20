import { ModalConf } from './../../../variable-globale/modal-conf';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/class/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserService, private modalConf: ModalConf) { }

  public users: User[];
  ngOnInit() {
    this.userService.getAll().subscribe(data => this.users = data);
  }


  public deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }

  public getModalStatus(){
    return this.modalConf.getAdminUserEditStatus();
  }

  public openModal(){
    this.modalConf.openAdminUserEditModal();
  }
}
