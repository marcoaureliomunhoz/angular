import { Tarefa } from '../tarefa';
import { TarefasService } from './../tarefas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  lista: Array<Tarefa> = [];

  constructor(private tarefas: TarefasService) { }

  remover(id: number) {
    this.tarefas.remover(id);
    this.lista = this.tarefas.listar();
  }

  ngOnInit() {
    this.lista = this.tarefas.listar();
  }

}
