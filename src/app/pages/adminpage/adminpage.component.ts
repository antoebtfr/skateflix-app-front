import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {

  public user = [
    1, 2, 3, 4 , 4 , 4 , 4 , 4 , 4 , 4, , 5 , 55 , 5 , 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];

  public categories = ['users', 'video'];

  public selectedCategories = 'users';
  constructor() { }

  ngOnInit() {
  }

  public transmission(categorie: string) {
    this.selectedCategories = categorie;
  }
}
