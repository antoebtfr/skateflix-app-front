import { ModalConf } from './../../variable-globale/modal-conf';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public isSelected = ''; // Valeur par défaut de la liste

  constructor(private modalConf: ModalConf) { }

  ngOnInit() {
    this.isSelected = this.getTab();
  }


  public switchTab(tab: string) {
    this.isSelected = tab;
  }

  private getTab() {
    return this.modalConf.getSettingsTab();
  }
}
