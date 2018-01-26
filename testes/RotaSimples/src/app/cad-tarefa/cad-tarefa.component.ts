import { TarefasService } from './../tarefas.service';
import { Tarefa } from './../tarefa';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import Materialize from '../../../node_modules/materialize-css/dist/js/materialize.min.js';

@Component({
  selector: 'app-cad-tarefa',
  templateUrl: './cad-tarefa.component.html',
  styleUrls: ['./cad-tarefa.component.css']
})
export class CadTarefaComponent implements OnInit {

  titulo = 'Nova Tarefa';

  tarefa: Tarefa;

  salvar() {
    if (this.tarefa.descricao.length > 3) {
      this.tarefas.salvar(this.tarefa);
      this.router.navigate(['tarefas']);
    }
    //else {
    //  Materialize.toast('Informe a descrição!', 4000);
    //}
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tarefas: TarefasService
  ) {
    this.tarefa = new Tarefa(0, '');
  }

  ngOnInit() {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id > 0) {
      this.tarefa = this.tarefas.selecionar(id);
      this.titulo = 'Alterando Tarefa';
    }
  }

}
