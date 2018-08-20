import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  private verificarAcesso(url: string) {
    if (this.auth.usuarioAutenticado()) {
      if (url && url.includes('usuarios') && this.auth.usuario() !== 'admin') {
        this.router.navigate(['/home']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('AuthGuard canActivate');
    return this.verificarAcesso(state.url);
  }

  canLoad(
    route: Route
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('AuthGuard canLoad');
    return this.verificarAcesso('');
  }

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }
}
