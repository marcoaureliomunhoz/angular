import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaComponent } from './lista.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EditorasService } from '../editoras.service';
import { of } from 'rxjs';
import { Editora } from '../editora.model';
import { By } from '@angular/platform-browser';

describe('ListaComponent', () => {
  let component: ListaComponent;
  let fixture: ComponentFixture<ListaComponent>;
  let editorasService: EditorasService;
  const editoras: Editora[] = [
    { _id: '1', nome: 'abc', telefone: '123' },
    { _id: '2', nome: 'def', telefone: '456' },
  ];
  const copia = [ ...editoras ];
  let spyEditorasServiceListar: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComponent);
    component = fixture.componentInstance;

    editorasService = fixture.debugElement.injector.get(EditorasService);
    spyEditorasServiceListar = spyOn(editorasService, 'listar').and.returnValue(of(editoras));

    fixture.detectChanges(); // ngOnInit
  });

  it('deve criar', () => {
    expect(component).toBeTruthy();
  });

  it('deve obter a lista esperada', () => {
    // Arrange
    // ...

    // Act
    component.obterLista();

    // Assert
    fixture.whenStable().then(() => {
      expect(component.lista).toEqual(copia);
    });
  });

  it('deve renderizar a quantidade de editoras da lista esperada', () => {
    // Arrange
    // ...

    // Act
    component.obterLista();

    // Assert
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const elementos = fixture.debugElement.queryAll(By.css('.table-item-editora'));

      // console.log(elementos);

      expect(elementos.length).toEqual(editoras.length);
    });
  });

  it('deve renderizar as editoras da lista esperada', () => {
    // Arrange
    // ...

    // Act
    component.obterLista();

    // Assert
    fixture.whenStable().then(() => {
      fixture.detectChanges();

      const elementos = fixture.debugElement.queryAll(By.css('.table-item-editora'));
      const nativos = elementos.map(elem => elem.nativeElement);
      const tipados = nativos.map((elem: HTMLTableRowElement) => {
        return {
          _id: elem.cells[0].innerHTML,
          nome: elem.cells[1].innerHTML,
          telefone: elem.cells[2].innerHTML
        };
      });

      // console.log(elementos);
      // console.log(nativos);
      // console.log(tipados);

      expect(tipados).toEqual(editoras);
    });
  });

});
