import { Link } from './../../shared/class/link';
import { Component, OnInit } from '@angular/core';
import { VariablesGlobales } from 'src/app/variable-globale/variable-global';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // public links: Link[] = [
  //   { name: 'Connexion', redirectTo: '', activate: this.test() },
  //   { name: 'Mes abonnements', redirectTo: '' },
  //   { name: 'Poster', redirectTo: '' },
  //   { name: 'Exploration', redirectTo: '' }
  // ];
  constructor(private varglo: VariablesGlobales) {}

  ngOnInit() {
    this.afterScroll();
  }

  private afterScroll() {
    const navbarCSS = document.getElementById('nav-body').style;

    document.addEventListener('scroll', () => {
      scrollY > 0
        ? (navbarCSS.backgroundColor = '#191919')
        : (navbarCSS.backgroundColor = 'transparent');
    });
  }

  public openSidebar() {
    this.varglo.openSidebar();
  }
}
