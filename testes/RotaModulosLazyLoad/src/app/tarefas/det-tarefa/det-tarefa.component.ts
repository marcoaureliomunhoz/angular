import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { TarefasService } from '../../tarefas/tarefas.service';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'app-det-tarefa',
  templateUrl: './det-tarefa.component.html',
  styleUrls: ['./det-tarefa.component.css']
})
export class DetTarefaComponent implements OnInit, OnDestroy {

  titulo = 'Detalhando Tarefa';

  tarefa: Tarefa;
  inscricao: Subscription;

  remover() {
    this.tarefas.remover(this.tarefa.id);
    this.router.navigate(['/tarefas']);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tarefas: TarefasService
  ) {
    console.log('DetTarefaComponent constructor');
    this.tarefa = new Tarefa(0, '', '');
  }

  ngOnInit() {
    console.log('DetTarefaComponent ngOnInit');
    /*this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id: number = Number(params.id);
        if (id > 0) {
          this.tarefa = this.tarefas.selecionar(id);
        }
      }
    );*/

    this.inscricao = this.route.data.subscribe(
      (info: {tarefa: Tarefa}) => { /*tipagem*/
        this.tarefa = info.tarefa;
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
