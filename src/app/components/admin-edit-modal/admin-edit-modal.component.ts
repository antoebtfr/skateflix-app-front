import { AdminUserService } from './../../shared/service/admin-user.service';
import { ModalConf } from './../../variable-globale/modal-conf';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/class/user';

@Component({
  selector: 'app-admin-edit-modal',
  templateUrl: './admin-edit-modal.component.html',
  styleUrls: ['./admin-edit-modal.component.scss']
})
export class AdminEditModalComponent implements OnInit, AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private modalConf: ModalConf,
    private adminservice: AdminUserService
  ) {}

  @ViewChild('surname', { static: false }) private surnameHTML;
  @ViewChild('firstname', { static: false }) private firsnameHTML;
  @ViewChild('nickname', { static: false }) private nicknameHTML;
  @ViewChild('age', { static: false }) private ageHTML;
  @ViewChild('country', { static: false }) private countryHTML;
  @ViewChild('region', { static: false }) private regionHTML;

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
    isPremium: ['']
  });

  ngOnInit() {}

  ngAfterViewInit() {
    this.surnameHTML = this.surnameHTML.nativeElement;
    this.firsnameHTML = this.firsnameHTML.nativeElement;
    this.nicknameHTML = this.nicknameHTML.nativeElement;
    this.ageHTML = this.ageHTML.nativeElement;
    this.countryHTML = this.countryHTML.nativeElement;
    this.regionHTML = this.regionHTML.nativeElement;

    this.updateInputs();
  }

  public closeModal() {
    this.modalConf.closeAdminUserEditModal();
  }

  private updateInputs() {
    const user = this.adminservice.getEditedUserInfo();

    this.surnameHTML.value = user.surname;
    this.firsnameHTML.value = user.firstname;
    this.nicknameHTML.value = user.nickname;
    this.ageHTML.value = user.age;
    this.countryHTML.value = user.country;
    this.regionHTML.value = user.region;
  }
}
