import { Injectable } from '@angular/core';

import { Usuario } from '../models/usuario';

@Injectable()
export class UsuariosService {

  private maxid = 3;
  usuarios: Array<Usuario> = [
    { id: 1, nome: 'admin', senha: '123' },
    { id: 2, nome: 'marco', senha: '123' }
  ];

  salvar(usuario: Usuario) {
    if (usuario.id > 0) {
      const cadastro = this.selecionar(usuario.id);
      if (cadastro !== null) {
        cadastro.nome = usuario.nome;
        cadastro.senha = usuario.senha;
      }
    } else {
      usuario.id = this.maxid;
      this.maxid++;
      this.usuarios.push(usuario);
    }
  }

  listar(): Array<Usuario> {
    return this.usuarios;
  }

  localizar(id: number): number {
    let achou = false;
    let i = 0;
    const tam = this.usuarios.length;
    while (!achou && i < tam) {
      if (this.usuarios[i].id === id) {
        achou = true;
      } else {
        i++;
      }
    }
    return achou ? i : -1;
  }

  localizarLogin(nome: string, senha: string): number {
    /*console.log('usuarios.service localizarLogin => ', this.usuarios);*/
    let achou = false;
    let i = 0;
    const tam = this.usuarios.length;
    while (!achou && i < tam) {
      if (this.usuarios[i].nome === nome && this.usuarios[i].senha === senha) {
        achou = true;
      } else {
        i++;
      }
    }
    return achou ? i : -1;
  }

  selecionar(id: number): Usuario {
    const i = this.localizar(id);
    if (i >= 0) {
      return this.usuarios[i];
    }
    return null;
  }

  remover(id: number): boolean {
    const i = this.localizar(id);
    if (i >= 0) {
      this.usuarios.splice(i, 1);
      return true;
    }
    return false;
  }

  constructor() {
  }

}
