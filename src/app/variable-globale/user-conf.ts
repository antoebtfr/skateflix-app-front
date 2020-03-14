import { Injectable } from '@angular/core';

@Injectable()
export class UserConf {
    private connected = false;

    public getConnexionStatus() {
        return this.connected;
    }
}
