import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { UsuariosService } from '../../usuarios/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  titulo = 'Nova Tarefa';

  usuario: Usuario;
  inscricao: Subscription;
  private formAlteracoes = 0;

  salvar() {
    if (this.usuario.nome.length >= 3 && this.usuario.senha.length >= 3) {
      this.usuarios.salvar(this.usuario);
      this.formAlteracoes = 0;
      this.router.navigate(['usuarios']);
    }
  }

  onInput() {
    this.formAlteracoes++;
  }

  podeSairSemSalvar() {
    if (this.formAlteracoes > 0) {
      return confirm('Deseja realmente sair sem salvar?');
    }
    return true;
  }

  podeDesativar() {
    return this.podeSairSemSalvar();
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuarios: UsuariosService
  ) {
    this.usuario = new Usuario(0, '', '');
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id: number = Number(params.id);
        if (id > 0) {
          this.usuario = this.usuarios.selecionar(id);
          this.titulo = 'Alterando Usuário';
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
