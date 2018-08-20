import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UsuariosService } from './../usuarios/usuarios.service';

@Injectable()
export class AuthService {

  private usuarioAuth = false;
  private usuarioLogin = '';

  autenticar(nome: string, senha: string) {
    console.log('atenticar: ', nome);
    const posi = this.usuarios.localizarLogin(nome, senha);
    this.usuarioAuth = posi >= 0;
    this.usuarioLogin = '';
    /*console.log('posi: ', posi);*/
    if (this.usuarioAuth) {
      this.usuarioLogin = nome;
      this.router.navigate(['/home']);
    }
  }

  usuarioAutenticado() {
    return this.usuarioAuth;
  }

  usuario() {
    return this.usuarioLogin;
  }

  constructor(
    private router: Router,
    private usuarios: UsuariosService
  ) {
  }

}
