import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { Tarefa } from '../tarefa';
import { TarefasService } from './../tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  inscricao: Subscription;
  pagina: number;
  lista: Array<Tarefa> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tarefas: TarefasService
  ) { }

  remover(id: number) {
    this.tarefas.remover(id);
    this.lista = this.tarefas.listar();
  }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(['/tarefas'],{
        queryParams: {'pagina' : this.pagina}
    });
  }

  paginaAnterior() {
    if (this.pagina > 1) {
      this.pagina--;
      this.router.navigate(['/tarefas'],{
          queryParams: {'pagina' : this.pagina}
      });
    }
  }

  ngOnInit() {
    this.lista = this.tarefas.listar();
    this.inscricao = this.route.queryParams.subscribe((params) => {
      this.pagina = Number(params['pagina']);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
