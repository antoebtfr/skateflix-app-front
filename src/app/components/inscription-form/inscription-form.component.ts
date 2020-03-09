import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'src/app/variable-globale/variable-global';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent implements OnInit {

  constructor(private varglo: VariablesGlobales, private fb: FormBuilder) { }

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
    return this.varglo.switchToConnection();
  }

  public showUser() {
    if (!this.inscriptionForm.value.CGU) {
      throw alert('Veuillez acceptez les conditions d\'utilisation');
    }

    if (this.inscriptionForm.valid) {
      console.log(this.inscriptionForm.value);
      this.inscriptionForm.reset();
    }
  }
}
