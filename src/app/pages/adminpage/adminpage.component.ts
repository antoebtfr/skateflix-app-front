import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import { User } from 'src/app/shared/class/user';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  constructor(private userService: UserService) { }

  private cateListCSS; // Modal showing off list of categories
  public users: User[];
  public categories = ['users', 'video'];

  public selectedCategories = 'users';


  ngOnInit() {
    this.cateListCSS = document.getElementById('categorie-list').style;
    this.userService.getAll().subscribe( data => this.users = data);
  }

  public transmission(categorie: string) {
    this.selectedCategories = categorie;
    this.cateListCSS.display = 'none';
  }

  public openCategoriesList() {
  this.cateListCSS.display = 'inline-block';
  }

}
