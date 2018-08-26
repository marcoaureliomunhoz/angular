import { TarefasService } from './../tarefas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tarefa } from '../../models/Tarefa';

@Component({
  selector: 'app-cad-tarefa-reativa',
  templateUrl: './cad-tarefa-reativa.component.html',
  styleUrls: ['./cad-tarefa-reativa.component.css']
})
export class CadTarefaReativaComponent implements OnInit, OnDestroy {

  formulario: FormGroup;
  routerParamsInsc: Subscription;

  salvar() {
    this.submeter();
    this.router.navigate(['tarefas']);
  }

  submeter() {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.tarefasService.cadastrar(this.formulario.value);
      /*depois de enviar e receber a resposta*/
      this.cancelar();
    } else {
      console.log('formulario invalido');
      this.ativarValidacaoCamposInvalidos(this.formulario);
    }
  }

  private ativarValidacaoCamposInvalidos(formGroup: FormGroup) {
    if (formGroup.controls) {
      Object.keys(formGroup.controls).forEach(campo => {
        const controle = formGroup.get(campo);
        if (controle.errors) {
          console.log(`- campo ${campo} com problemas`);
        }
        if (controle instanceof FormGroup) {
          this.ativarValidacaoCamposInvalidos(controle);
        }
      });
    }
  }

  cancelar() {
    this.formulario.reset();
  }

  defCssValidacao(campo) {
    const campoValido = this.formulario.get(campo).valid;
    return {
      'is-invalid': !campoValido
    };
  }

  private inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      descricao: [null, [Validators.required, Validators.minLength(3)]],
      detalhes: [null, [Validators.required]]
    });
  }

  private carregarFormulario(tarefa: Tarefa) {
    this.formulario.patchValue({
      id: tarefa.id,
      descricao: tarefa.descricao,
      detalhes: tarefa.detalhes
    });
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private tarefasService: TarefasService
  ) { }

  ngOnInit() {
    this.inicializarFormulario();

    this.routerParamsInsc = this.route.params.subscribe(
      (params: any) => {
        const id: number = Number(params.id);
        console.log('id: ', id);
        if (id > 0) {
          this.carregarFormulario(this.tarefasService.localizar(id));
        } else {
          this.carregarFormulario(new Tarefa(0, '', ''));
        }
      }
    );
  }

  ngOnDestroy() {
    this.routerParamsInsc.unsubscribe();
  }

}
