import { AdminUserService } from './../service/admin-user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminConnectedGuard implements CanActivate {
  constructor(private adminService: AdminUserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.adminService.getConnectedStatus()) {
      this.router.navigateByUrl('/admin');
      return false;
    }
    return true;
  }

}
