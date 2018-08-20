import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { Tarefa } from '../models/tarefa';
import { TarefasService } from '../tarefas/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit, OnDestroy {

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

  detalhar(id: number) {
    this.router.navigate(['/tarefas', id, 'detalhar']);
  }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(['/tarefas'], {
        queryParams: {'pagina' : this.pagina}
    });
  }

  paginaAnterior() {
    if (this.pagina > 1) {
      this.pagina--;
      this.router.navigate(['/tarefas'], {
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
