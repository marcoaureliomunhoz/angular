import { Component, OnInit } from '@angular/core';

import { Usuario } from './../models/usuario';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario(0, '', '');

  acessar() {
    if (this.usuario.nome.length >= 3 && this.usuario.senha.length >= 3) {
      this.auth.autenticar(this.usuario.nome, this.usuario.senha);
    }
  }

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

}
