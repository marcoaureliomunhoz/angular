import { Component, OnInit } from '@angular/core';
import { EditorasService } from '../editoras.service';
import { Editora } from '../editora.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista: Editora[] = [];

  constructor(
    private editorasService: EditorasService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(`ngOnInit - antes - ${new Date().toISOString()}`);
    this.obterLista();
    // console.log(`ngOnInit - depois - ${new Date().toISOString()}`);
  }

  novo() {
    this.router.navigate(['cadastrar']);
  }

  async obterLista() {
    this.lista = await this.editorasService.listar().toPromise();
  }
}
