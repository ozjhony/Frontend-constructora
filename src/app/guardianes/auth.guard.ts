import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../config/service-config';
import { SeguridadService } from '../services/seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private secService: SeguridadService,
    private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.secService.sessionExist() && this.secService.VerifyRoleInSession(ServiceConfig.ADMIN_ROL_ID)) {
        return true;
      } else {
        
        return false;
      }
  }
  
}
