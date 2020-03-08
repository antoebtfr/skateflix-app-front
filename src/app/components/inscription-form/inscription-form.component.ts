import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'src/app/variable-globale/variable-global';

@Component({
  selector: 'app-inscription-form',
  templateUrl: './inscription-form.component.html',
  styleUrls: ['./inscription-form.component.scss']
})
export class InscriptionFormComponent implements OnInit {

  constructor(private varglo: VariablesGlobales) { }

  ngOnInit() {
  }

  public switch() {
    return this.varglo.switchToConnection();
  }

}
