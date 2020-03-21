import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditorasService } from '../editoras.service';
import { Editora } from '../editora.model';

export const mensagemCadastroInvalido = 'Cadastro inválido!';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private editorasService: EditorasService
  ) { }

  ngOnInit() {
    this.prepararForm();
  }

  voltar() {
    this.router.navigate(['/']);
  }

  prepararForm() {
    this.form = this.formBuilder.group({
      _id: [null],
      nome: [null, [Validators.required]],
      telefone: [null]
    });
  }

  async salvar() {
    const podeSalvar = this.podeSalvar();
    if (!podeSalvar) {
      alert(mensagemCadastroInvalido);
      return;
    }

    const editora = this.instanciar();
    const response = await this.editorasService.inserir(editora).toPromise();

    console.log('response: ', response);

    this.voltar();
  }

  podeSalvar() {
    this.form.markAllAsTouched();
    return this.form.valid;
  }

  instanciar() {
    const editora = new Editora();
    editora._id = this.form.get('_id').value;
    editora.nome = this.form.get('nome').value;
    editora.telefone = this.form.get('telefone').value;
    return editora;
  }

}
