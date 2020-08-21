import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor() { }

  private surname = 'Wesh';
  private firstname = 'La team';
  private age = 13;
  private nickname = 'SuperkIller';
  private country = 'France';
  private region = 'Gironde';
  private isAdmin = false;
  private isPremium = false;


  public modifyEditedUser(user: User) {
    this.firstname = user.firstname;
    this.surname = user.surname;
    this.nickname = user.nickname;
    this.age = user.age;
    this.country = user.country;
    this.region = user.region;
  }


  public getEditedUserInfo(): User {
    const user = {
      firstname: this.firstname,
      surname: this.surname,
      nickname: this.nickname,
      age: this.age,
      isAdmin: this.isAdmin,
      isPremium: this.isPremium,
      region: this.region,
      country: this.country,
      password: undefined,
      email: undefined,
    };

    return user;
  }

}
