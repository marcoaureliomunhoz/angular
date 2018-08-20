import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Tarefa } from './../../models/tarefa';

import { TarefasService } from './../tarefas.service';

@Injectable()
export class TarefaResolver implements Resolve<Tarefa> {

  constructor(private tarefas: TarefasService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    console.log('TarefaResolver');
    const id = Number(route.params['id']);
    console.log('...resolver: ', id);
    return this.tarefas.selecionar(id);
  }
}
