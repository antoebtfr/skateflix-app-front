import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'src/app/variable-globale/variable-global';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.scss']
})
export class ConnectionFormComponent implements OnInit {

  constructor(private varglo: VariablesGlobales) { }

  ngOnInit() {
  }

  public switch() {
    this.varglo.switchToInscription();
  }

}
