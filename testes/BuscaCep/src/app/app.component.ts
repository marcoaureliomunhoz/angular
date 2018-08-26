import { Component } from '@angular/core';

import { CepService } from './cep.service';

import { Cep } from './cep';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cep: string;
  cepCompleto: Cep = new Cep();

  constructor(private cepService: CepService) { }

  buscar() {
    this.cepService.buscar(this.cep)
        .then((resposta: Cep) => {
          console.log(resposta);
          this.cepCompleto = new Cep();
          this.cepCompleto.cep = resposta.cep;
          this.cepCompleto.logradouro = resposta.logradouro;
          this.cepCompleto.bairro = resposta.bairro;
          this.cepCompleto.uf = resposta.uf;
          this.cepCompleto.localidade = resposta.localidade;
        })
        .catch(() => {
          console.log('Ops! Algo errado na busca.');
        });
  }

  cepKeyPressed(valor) {
    /*console.log('cep: ', valor);*/
    /*console.log('length: ', valor.length);*/
    if (valor.length >= 8) {
      this.cep = this.cep.replace(/\D/g, '');
      if (this.cep !== '') {
        const validaCep = /^[0-9]{8}$/;
        if (validaCep.test(this.cep)) {
          this.buscar();
        }
      }
    } else {
      this.cepCompleto = new Cep();
    }
  }

}
