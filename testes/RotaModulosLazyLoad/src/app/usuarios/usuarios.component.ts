import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { Usuario } from '../models/usuario';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  inscricao: Subscription;
  pagina: number;
  lista: Array<Usuario> = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usuarios: UsuariosService
  ) { }

  remover(id: number) {
    this.usuarios.remover(id);
    this.lista = this.usuarios.listar();
  }

  detalhar(id: number) {
    this.router.navigate(['/usuarios', id, 'detalhar']);
  }

  proximaPagina() {
    this.pagina++;
    this.router.navigate(['/usuarios'], {
        queryParams: {'pagina' : this.pagina}
    });
  }

  paginaAnterior() {
    if (this.pagina > 1) {
      this.pagina--;
      this.router.navigate(['/usuarios'], {
          queryParams: {'pagina' : this.pagina}
      });
    }
  }

  ngOnInit() {
    this.lista = this.usuarios.listar();
    this.inscricao = this.route.queryParams.subscribe((params) => {
      this.pagina = Number(params['pagina']);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
