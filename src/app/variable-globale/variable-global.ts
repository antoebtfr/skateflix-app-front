import { Injectable } from '@angular/core';
@Injectable()
export class VariablesGlobales {
    private connectionModal = false; // true = Connection Modal - false = Inscriptio Modal
    private sidebar = false; // true = Sidebar open - false = Sidebar close

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

    public openSidebar() {
        this.sidebar = true;
    }

    public closeSidebar() {
        this.sidebar = false;
    }

    // NEEDFIX: OBSERVABLE
}
