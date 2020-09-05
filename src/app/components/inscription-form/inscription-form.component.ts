import { AuthService } from './../../shared/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ModalConf } from 'src/app/variable-globale/modal-conf';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent implements OnInit {

  constructor(
    private modalConf: ModalConf,
    private fb: FormBuilder,
    private authService: AuthService
    ) { }

  public inscriptionForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(35)]],
    CGU: ['', [Validators.required]]
  });

  ngOnInit() {
  }

  public switch() {
    return this.modalConf.switchToConnection();
  }

  public sendUser() {
    if (!this.inscriptionForm.value.CGU) {
      throw alert('Veuillez acceptez les conditions d\'utilisation');
    }

    if (this.inscriptionForm.valid) {
      console.log(this.inscriptionForm.value);
      this.authService.signUp(this.inscriptionForm.value)
      .subscribe(data => {
        alert('La création du compte a été effectué. Veuillez confirmer la validation de votre compte');
        this.inscriptionForm.reset();
      },
        err => alert('Email déjà utilisée'));
    }
  }
}
