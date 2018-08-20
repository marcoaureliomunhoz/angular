import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { TarefasService } from '../../tarefas/tarefas.service';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-cad-tarefa',
  templateUrl: './cad-tarefa.component.html',
  styleUrls: ['./cad-tarefa.component.css']
})
export class CadTarefaComponent implements OnInit, OnDestroy {

  titulo = 'Nova Tarefa';

  tarefa: Tarefa;
  inscricao: Subscription;

  salvar() {
    if (this.tarefa.descricao.length > 3) {
      this.tarefas.salvar(this.tarefa);
      this.router.navigate(['tarefas']); /*roteamento imperativo*/
    }
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tarefas: TarefasService
  ) {
    this.tarefa = new Tarefa(0, '');
  }

  ngOnInit() {
    /*uma forma de acessar os parâmetros é se inscrever em params para receber a chamada e só então acessar os parâmetros*/
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id: number = Number(params.id);
        if (id > 0) {
          this.tarefa = this.tarefas.selecionar(id);
          this.titulo = 'Alterando Tarefa';
        }
      }
    );

    /*uma outra forma de acessar os parâmetros é acessar diretamente por snapshot.paramMap*/
    /*
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    if (id > 0) {
      this.tarefa = this.tarefas.selecionar(id);
      this.titulo = 'Alterando Tarefa';
    }
    */
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
