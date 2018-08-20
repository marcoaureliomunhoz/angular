import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './../login/auth.service';

@Injectable()
export class TarefasGuard implements CanActivateChild, CanActivate {

  private podeAtivar(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log(state.url);
    if (state.url !== '/tarefas') {
      if (!state.url.includes('detalhar') && this.auth.usuario() !== 'admin') {
        this.router.navigate(['/tarefas']);
        return false;
      }
    }
    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('TarefasGuard CanActivate');
    return this.podeAtivar(route, state);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('TarefasGuard CanActivateChild');
    return this.podeAtivar(route, state);
  }

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }
}
