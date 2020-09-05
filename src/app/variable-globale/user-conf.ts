import { Injectable } from '@angular/core';

@Injectable()
export class UserConf {
  private connected = true; // Variable managing the switch to connected / not connected mode of the site

  private userFirstname = 'Pierre';
  private userSurname = 'Croce';
  private userNickname = 'Pierrot';
  private userAge = 27;
  private userNationality = 'France';
  private userLocation = 'Bordeaux';
  private userId = 2;
  private userBio = 'Salut, je suis la bio de pieerot';
  private userProfilPicture = 'https://nyjah.com/wp-content/uploads/2018/01/C_v2RQkWAAQ-4c3.jpg';

  public getConnexionStatus() { // Retrieve the status of the connected variable
    return this.connected;
  }

  public disconnect() { // Switch the site in Not connected Mode
    this.connected = false;
  }

  public connection() { // Switch the site in Connected Mode
    this.connected = true;
  }

  public getUserInfo() {
    const user = {
      id: this.userId,
      firstname: this.userFirstname,
      surname: this.userSurname,
      nickname: this.userNickname,
      age: this.userAge,
      location: this.userLocation,
      nationality: this.userNationality,
      profilPicture: this.userProfilPicture,
      bio: this.userBio
    };

    return user;
  }
}
