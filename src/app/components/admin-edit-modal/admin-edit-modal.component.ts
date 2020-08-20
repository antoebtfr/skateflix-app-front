import { ModalConf } from './../../variable-globale/modal-conf';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/class/user';

@Component({
  selector: 'app-admin-edit-modal',
  templateUrl: './admin-edit-modal.component.html',
  styleUrls: ['./admin-edit-modal.component.scss']
})
export class AdminEditModalComponent implements OnInit {

  constructor(private fb: FormBuilder, private modalConf: ModalConf) { }

  public editForm = this.fb.group({
    surname: [''],
    firstname: [''],
    nickname: [''],
    email: [''],
    password: [''],
    bio: [''],
    age: [''],
    country: [''],
    region: [''],
    isAdmin: [''],
    isPremium: [''],
  });

  ngOnInit() {
  }

  public closeModal(){
    this.modalConf.closeAdminUserEditModal();
  }
}
