import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroComponent, mensagemCadastroInvalido } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EditorasService } from '../editoras.service';
import { By } from '@angular/platform-browser';
import { Editora } from '../editora.model';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

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
    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // ao chamar detectChanges o ngOnInit é chamado, que por sua vez chama o prepararForm
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('não deve permitir salvar cadastro inválido', () => {
    // Arrange
    component.form.get('nome').setValue('');
    component.form.get('telefone').setValue('123');
    const resultadoEsperado = false;

    // Act
    const podeSalvar = component.podeSalvar();

    // Assert
    expect(podeSalvar).toBe(resultadoEsperado);
  });

  it('deve permitir salvar cadastro válido', () => {
    // Arrange
    component.form.get('nome').setValue('a');
    component.form.get('telefone').setValue('');
    const resultadoEsperado = true;

    // Act
    const podeSalvar = component.podeSalvar();

    // Assert
    expect(podeSalvar).toBe(resultadoEsperado);
  });

  it('não deve enviar para servidor cadastro inválido', async () => {
    // Arrange
    component.form.get('nome').setValue('');
    component.form.get('telefone').setValue('123');
    const editorasService: EditorasService = fixture.debugElement.injector.get(EditorasService);
    const spyInserirEditora = spyOn(editorasService, 'inserir');

    // Act
    // fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    component.salvar();

    // Assert
    expect(spyInserirEditora).not.toHaveBeenCalled();
  });

  it('deve alertar usuário sobre cadastro inválido', async () => {
    // Arrange
    // const alertCopy = alert;
    window.alert = jasmine.createSpy();
    component.form.get('nome').setValue('');
    component.form.get('telefone').setValue('123');

    // Act
    // fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    component.salvar();

    // Assert
    expect(window.alert).toHaveBeenCalledWith(mensagemCadastroInvalido);
    // window.alert = alertCopy;
  });

  it('deve enviar para servidor cadastro válido', () => {
    // Arrange
    component.form.get('nome').setValue('a');
    component.form.get('telefone').setValue('123');
    const editorasService: EditorasService = fixture.debugElement.injector.get(EditorasService);
    const spyInserirEditor = spyOn(editorasService, 'inserir').and.returnValue(of());

    // Act
    fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    // component.salvar();

    // Assert
    expect(spyInserirEditor).toHaveBeenCalledWith(jasmine.any(Editora));
  });

  it('deve enviar para servidor editora válida', () => {
    // Arrange
    component.form.get('nome').setValue('a');
    component.form.get('telefone').setValue('123');
    const editorasService: EditorasService = fixture.debugElement.injector.get(EditorasService);
    const spyInserirEditor = spyOn(editorasService, 'inserir').and.returnValue(of());

    // Act
    fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    // component.salvar();

    // Assert
    expect(spyInserirEditor).toHaveBeenCalledWith(jasmine.objectContaining({nome: 'a', telefone: '123'}));
  });

  it('deve voltar para lista após enviar para servidor editora válida', () => {
    // Arrange
    component.form.get('nome').setValue('a');
    component.form.get('telefone').setValue('123');
    const editorasService: EditorasService = fixture.debugElement.injector.get(EditorasService);
    spyOn(editorasService, 'inserir').and.returnValue(of());

    // Act
    fixture.debugElement.query(By.css('button.btn-salvar')).triggerEventHandler('click', null);
    // component.salvar();

    // Assert
    fixture.whenStable().then(() => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/']);
    });
  });

});
