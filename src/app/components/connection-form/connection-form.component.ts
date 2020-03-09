import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'src/app/variable-globale/variable-global';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.scss']
})
export class ConnectionFormComponent implements OnInit {

  constructor(private varglo: VariablesGlobales, private fb: FormBuilder) { }

  public connectionForm = this.fb.group({
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required]]
  });

  public submitted = false;

  ngOnInit() {
  }

  public switch() {
    this.varglo.switchToInscription();
  }

  public sendUser() {
    this.submitted = true;

    if (this.connectionForm.valid) {
    console.log(this.connectionForm.value);
    this.connectionForm.reset();
    this.submitted = false;
    }
  }

}
