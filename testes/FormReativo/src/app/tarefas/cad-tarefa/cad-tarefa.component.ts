import { TarefasService } from './../tarefas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tarefa } from '../../models/Tarefa';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cad-tarefa',
  templateUrl: './cad-tarefa.component.html',
  styleUrls: ['./cad-tarefa.component.css']
})
export class CadTarefaComponent implements OnInit, OnDestroy {

  tarefa: Tarefa = new Tarefa(0, '', '');
  routerParamsInsc: Subscription;

  salvar() {
    this.tarefasService.cadastrar(this.tarefa);
    this.router.navigate(['tarefas']);
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tarefasService: TarefasService
  ) { }

  ngOnInit() {
    this.routerParamsInsc = this.route.params.subscribe(
      (params: any) => {
        const id: number = Number(params.id);
        if (id > 0) {
          console.log('id: ', id);
          this.tarefa = this.tarefasService.localizar(id);
        } else {
          this.tarefa = new Tarefa(0, '', '');
        }
      }
    );
  }

  ngOnDestroy() {
    this.routerParamsInsc.unsubscribe();
  }

}
