import { Component, OnInit } from '@angular/core';
import { UserConf } from 'src/app/variable-globale/user-conf';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private userConf: UserConf) { }

  ngOnInit() {
  }

  public isConnected(){
    return this.userConf.getConnexionStatus();
  }

}
