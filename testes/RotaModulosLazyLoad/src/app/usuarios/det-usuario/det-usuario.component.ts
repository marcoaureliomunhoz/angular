import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { UsuariosService } from '../../usuarios/usuarios.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-det-usuario',
  templateUrl: './det-usuario.component.html',
  styleUrls: ['./det-usuario.component.css']
})
export class DetUsuarioComponent implements OnInit, OnDestroy {

  titulo = 'Detalhando Usuario';

  usuario: Usuario;
  inscricao: Subscription;

  remover() {
    this.usuarios.remover(this.usuario.id);
    this.router.navigate(['/usuarios']);
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
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
