import { UserService } from './../../shared/service/user.service';
import { AdminUserService } from './../../shared/service/admin-user.service';
import { ModalConf } from './../../variable-globale/modal-conf';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/class/user';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-admin-edit-modal',
  templateUrl: './admin-edit-modal.component.html',
  styleUrls: ['./admin-edit-modal.component.scss']
})
export class AdminEditModalComponent implements OnInit, AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private modalConf: ModalConf,
    private adminservice: AdminUserService,
    private userService: UserService
  ) {}

  @ViewChild('surname', { static: false }) private surnameHTML;
  @ViewChild('firstname', { static: false }) private firsnameHTML;
  @ViewChild('nickname', { static: false }) private nicknameHTML;
  @ViewChild('age', { static: false }) private ageHTML;
  @ViewChild('country', { static: false }) private countryHTML;
  @ViewChild('region', { static: false }) private regionHTML;
  private id: number;

  // Initialize the form
  public editForm = this.fb.group({
    surname: [''],
    firstname: [''],
    nickname: [''],
    bio: [''],
    age: [''],
    country: [''],
    region: [''],
  });

  ngOnInit() {}

  ngAfterViewInit() {
    const user = this.adminservice.getEditedUserInfo();

    this.surnameHTML = this.surnameHTML.nativeElement;
    this.firsnameHTML = this.firsnameHTML.nativeElement;
    this.nicknameHTML = this.nicknameHTML.nativeElement;
    this.ageHTML = this.ageHTML.nativeElement;
    this.countryHTML = this.countryHTML.nativeElement;
    this.regionHTML = this.regionHTML.nativeElement;

    // Update the form values

    this.editForm = this.fb.group({
      surname: [user.surname],
      firstname: [user.firstname],
      nickname: [user.nickname],
      age: [user.age],
      country: [user.country],
      region: [user.region],
    });

    this.updateInputs();
  }

  public closeModal() {
    this.modalConf.closeAdminUserEditModal();
  }

  private updateInputs() { // Update the input values
    const user = this.adminservice.getEditedUserInfo();

    this.surnameHTML.value = user.surname;
    this.firsnameHTML.value = user.firstname;
    this.nicknameHTML.value = user.nickname;
    this.ageHTML.value = user.age;
    this.countryHTML.value = user.country;
    this.regionHTML.value = user.region;
    this.id = user.id;
  }

  public sendData() {

    let user = this.editForm.value;

    // Send a number instead of a string
    if (user.age === '') {
      user.age = -1;
    }

    // Don't request if not touched
    if (this.editForm.touched === false) {
      this.closeModal();
      return ;
    }
    document.location.reload();
    this.userService.modifyUser(this.id, user).subscribe(data => user = data);
  }
}
