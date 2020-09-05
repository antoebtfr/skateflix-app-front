import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor() { }

  private isConnected = false;

  private id: number;
  private surname: string;
  private firstname: string;
  private age: number;
  private nickname: string;
  private country: string;
  private region: string;
  private isAdmin: boolean;
  private isPremium: boolean;


  public modifyEditedUser(user: User) {
    this.id = user.id;
    this.firstname = user.firstname;
    this.surname = user.surname;
    this.nickname = user.nickname;
    this.age = user.age;
    this.country = user.country;
    this.region = user.region;
    this.isAdmin = user.isAdmin;
    this.isPremium = user.isPremium;
  }


  public getEditedUserInfo() {
    const user = {
      id: this.id,
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
