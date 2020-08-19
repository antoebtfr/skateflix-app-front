import { Injectable } from '@angular/core';
@Injectable()
export class ModalConf {
    private connectionModal = true; // true = Connection Modal - false = Inscription Modal
    private sidebar = false; // true = Sidebar open - false = Sidebar close
    private settingsTab: string;

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

    public switchSettingsTab(tab: string){
      this.settingsTab = tab;
    }

    public getSettingsTab(){
      return this.settingsTab;
    }
    // NEEDFIX: OBSERVABLE
}
