import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../tarefas.service';
import { Tarefa } from '../../models/Tarefa';

@Component({
  selector: 'app-list-tarefas',
  templateUrl: './list-tarefas.component.html',
  styleUrls: ['./list-tarefas.component.css']
})
export class ListTarefasComponent implements OnInit {

  tarefas: Array<Tarefa> = [];

  constructor(
    private tarefasService: TarefasService
  ) { }

  ngOnInit() {
    this.tarefas = this.tarefasService.listar();
  }

}
