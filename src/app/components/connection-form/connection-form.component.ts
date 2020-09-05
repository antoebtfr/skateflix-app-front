import { User } from 'src/app/shared/class/user';
import { AuthService } from './../../shared/service/auth.service';
import { UserConf } from 'src/app/variable-globale/user-conf';
import { Component, OnInit } from '@angular/core';
import { ModalConf } from 'src/app/variable-globale/modal-conf';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.scss']
})
export class ConnectionFormComponent implements OnInit {

  constructor(
    private modalConf: ModalConf,
    private fb: FormBuilder,
    private userConf: UserConf,
    private authService: AuthService
    ) { }

  public connectionForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required]]
  });

  public submitted = false;
  public error: boolean;

  ngOnInit() {
  }

  public switch() {
    this.modalConf.switchToInscription();
  }

  public sendUser() {
    this.submitted = true;

    if (this.connectionForm.valid) {
    console.log(this.connectionForm.value);
    this.connection(this.connectionForm.value);
    this.connectionForm.reset();
    this.submitted = false;
    }
  }

  public connection(user) {


    this.authService.logIn(user).subscribe(data => {
      console.log(data);
      this.userConf.updateCurrentUser(data);
      this.userConf.connection();
    }, err => {
      this.error = true;
      throw new Error('something bad happened');
    });



  }

}
