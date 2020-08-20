import { Injectable } from '@angular/core';

@Injectable()
export class UserConf {
  private connected = true; // Variable managing the switch to connected / not connected mode of the site

  public getConnexionStatus() { // Retrieve the status of the connected variable
    return this.connected;
  }

  public disconnect() { // Switch the site in Not connected Mode
    this.connected = false;
  }

  public connection() { // Switch the site in Connected Mode
    this.connected = true;
  }
}
