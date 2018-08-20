import { Injectable } from '@angular/core';

import { Tarefa } from '../models/tarefa';

@Injectable()
export class TarefasService {

  private maxid = 1;
  tarefas: Array<Tarefa> = [];

  salvar(tarefa: Tarefa) {
    if (tarefa.id > 0) {
      const cadastro = this.selecionar(tarefa.id);
      if (cadastro !== null) {
        cadastro.descricao = tarefa.descricao;
        cadastro.detalhes = tarefa.detalhes;
      }
    } else {
      tarefa.id = this.maxid;
      this.maxid++;
      this.tarefas.push(tarefa);
    }
  }

  listar(): Array<Tarefa> {
    return this.tarefas;
  }

  localizar(id: number): number {
    let achou = false;
    let i = 0;
    const tam = this.tarefas.length;
    while (!achou && i < tam) {
      if (this.tarefas[i].id === id) {
        achou = true;
      } else {
        i++;
      }
    }
    return achou ? i : -1;
  }

  selecionar(id: number): Tarefa {
    const i = this.localizar(id);
    if (i >= 0) {
      return this.tarefas[i];
    }
    return null;
  }

  remover(id: number): boolean {
    const i = this.localizar(id);
    if (i >= 0) {
      this.tarefas.splice(i, 1);
      return true;
    }
    return false;
  }

  constructor() { }

}
