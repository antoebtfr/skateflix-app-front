import { Injectable } from '@angular/core';

@Injectable()
export class UserConf {
    private connected = true;

    public getConnexionStatus() {
        return this.connected;
    }
}
