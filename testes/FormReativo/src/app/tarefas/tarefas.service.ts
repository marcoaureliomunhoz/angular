import { Injectable } from '@angular/core';
import { Tarefa } from '../models/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private ultimoId = 2;
  private lista: Array<Tarefa> = [];

  listar(): Array<Tarefa> {
    return this.lista;
  }

  private retPosicao(id: number): number {
    let i = 0;
    let posicao = -1;

    if (this.lista.length > 0) {
      while (posicao === -1 && i < this.lista.length) {
        if (this.lista[i].id === id) {
          posicao = i;
        } else {
          i++;
        }
      }
    }

    return posicao;
  }

  localizar(id: number): Tarefa {
    const posicao = this.retPosicao(id);
    if (posicao >= 0) {
      return this.lista[posicao];
    }
    return null;
  }

  cadastrar(tarefa: Tarefa): number {
    /*console.log('cadastrar: ', tarefa);*/
    if (!tarefa.id || tarefa.id <= 0) {
      this.ultimoId++;
      tarefa.id = this.ultimoId;
      this.lista.push(tarefa);
      return tarefa.id;
    }
    const posicao = this.retPosicao(tarefa.id);
    if (posicao >= 0) {
      this.lista[posicao] = tarefa;
      return tarefa.id;
    }
    return 0;
  }

  constructor() {
    this.lista.push(
      new Tarefa(
            1,
            'Estudar Angular',
            'Usar como fonte de estudos os vídeos da Loiane Groier.'));

    this.lista.push(
      new Tarefa(
            2,
            'Estudar React Native',
            'Usar como fonte de estudos o curso da Udemy.'));
  }
}
