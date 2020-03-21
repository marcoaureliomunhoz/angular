import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { CadastroComponent, mensagemCadastroInvalido } from './cadastro.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EditorasService } from '../editoras.service';
import { By } from '@angular/platform-browser';
import { Editora } from '../editora.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { EditoraBuilder } from '../editora.modelBuilder';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let cadastroValido: Editora;
  let cadastroInvalido: Editora;
  let editorasService: EditorasService;
  let spyInserirEditora: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]), // aqui podemos definir rotas para teste
      ],
      providers: [
        { provide: Router, useValue: mockRouter },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    const editoraBuilder = new EditoraBuilder();
    cadastroValido = editoraBuilder.valida().builder();
    cadastroInvalido = editoraBuilder.invalida().builder();

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;

    editorasService = fixture.debugElement.injector.get(EditorasService);
    spyInserirEditora = spyOn(editorasService, 'inserir');

    fixture.detectChanges(); // ao chamar detectChanges o ngOnInit é chamado, que por sua vez chama o prepararForm
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  const setupForm = (form: FormGroup, cadastro: Editora) => {
    form.get('_id').setValue(cadastro._id);
    form.get('nome').setValue(cadastro.nome);
    form.get('telefone').setValue(cadastro.telefone);
  };

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('não deve permitir salvar cadastro inválido', () => {
    // Arrange
    setupForm(component.form, cadastroInvalido);

    // Act
    const podeSalvar = component.podeSalvar();

    // Assert
    expect(podeSalvar).toBe(false);
  });

  it('deve permitir salvar cadastro válido', () => {
    // Arrange
    setupForm(component.form, cadastroValido);

    // Act
    const podeSalvar = component.podeSalvar();

    // Assert
    expect(podeSalvar).toBe(true);
  });

  it('não deve enviar para servidor cadastro inválido', async () => {
    // Arrange
    setupForm(component.form, cadastroInvalido);

    // Act
    // fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    component.salvar();

    // Assert
    expect(spyInserirEditora).not.toHaveBeenCalled();
  });

  it('deve alertar usuário sobre cadastro inválido', async () => {
    // Arrange
    // const windowAlert = window.alert;
    window.alert = jasmine.createSpy();
    // window.alert = jest.fn();
    setupForm(component.form, cadastroInvalido);

    // Act
    // fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    component.salvar();

    // Assert
    expect(window.alert).toHaveBeenCalledWith(mensagemCadastroInvalido);
    // window.alert = windowAlert;
  });

  it('deve enviar para servidor cadastro válido', () => {
    // Arrange
    setupForm(component.form, cadastroValido);
    spyInserirEditora.and.returnValue(of());

    // Act
    fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    // component.salvar();

    // Assert
    expect(spyInserirEditora).toHaveBeenCalledWith(jasmine.any(Editora));
  });

  it('deve enviar para servidor editora válida', () => {
    // Arrange
    setupForm(component.form, cadastroValido);
    spyInserirEditora.and.returnValue(of());

    // Act
    fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    // component.salvar();

    // Assert
    expect(spyInserirEditora).toHaveBeenCalledWith(jasmine.objectContaining(cadastroValido));
  });

  it('deve voltar para lista após enviar para servidor editora válida', (done) => {
    // Arrange
    setupForm(component.form, cadastroValido);
    spyInserirEditora.and.returnValue(of());

    // Act
    fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    // component.salvar();

    // Assert
    fixture.whenStable().then(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
      done();
    });
  });

});
