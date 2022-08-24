import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class WorkoutGuardGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      const requiredRoles = next.data.requiredRoles;
      const actualRole = this.tokenService.getAuthorities().length > 1 ? 'admin' : 'user';

      if (!this.tokenService.getToken() || requiredRoles.indexOf(actualRole) === -1) {
        this.router.navigate(['/']);
        return false;
      } 
    return true;
  }
  
}
