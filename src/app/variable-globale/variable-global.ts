import { Injectable } from '@angular/core';
@Injectable()
export class VariablesGlobales {
    private connectionModal = true;
    private sidebar = false;

    public getConnectionModalStatus() {
        return this.connectionModal;
    }

    public switchToInscription() {
        this.connectionModal = false;
    }

    public switchToConnection() {
        this.connectionModal = true;
    }

    public getSidebarStatus() {
        return this.sidebar;
    }

    public openSidebar(){
        this.sidebar = true;
    }

    public closeSidebar() {
        this.sidebar = false;
    }

    // NEEDFIX: OBSERVABLE
}
