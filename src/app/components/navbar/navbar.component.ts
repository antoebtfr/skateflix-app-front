import { Component, OnInit } from '@angular/core';
import { ModalConf } from 'src/app/variable-globale/modal-conf';
import { UserConf } from 'src/app/variable-globale/user-conf';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private modalConf: ModalConf, private userConf: UserConf) {}

  ngOnInit() {
/*     this.afterScroll(); */
  }

/*   private afterScroll() {
    const navbarCSS = document.getElementById('nav-body').style;

    document.addEventListener('scroll', () => {
      scrollY > 0
        ? (navbarCSS.backgroundColor = '#191919')
        : (navbarCSS.backgroundColor = 'transparent');
    });
  } */

  public openSidebar() {
    this.modalConf.openSidebar();
  }

  public connectedStatus() {
    return this.userConf.getConnexionStatus();
  }
}
