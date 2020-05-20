import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  public adminList = [];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getList().subscribe(data => this.adminList = data);
  }

}
