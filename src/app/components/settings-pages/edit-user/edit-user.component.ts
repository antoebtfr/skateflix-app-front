import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalConf } from 'src/app/variable-globale/modal-conf';
import { AdminUserService } from 'src/app/shared/service/admin-user.service';
import { UserService } from 'src/app/shared/service/user.service';
import { UserConf } from 'src/app/variable-globale/user-conf';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private modalConf: ModalConf,
    private userConf: UserConf,
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
    const user = this.userConf.getUserInfo();

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
      country: [user.nationality],
      region: [user.location],
    });

    this.updateInputs();
  }

  public closeModal() {
    this.modalConf.closeUserEditModal();
  }

  private updateInputs() { // Update the input values
    const user = this.userConf.getUserInfo();

    this.surnameHTML.value = user.surname;
    this.firsnameHTML.value = user.firstname;
    this.nicknameHTML.value = user.nickname;
    this.ageHTML.value = user.age;
    this.countryHTML.value = user.nationality;
    this.regionHTML.value = user.location;
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
