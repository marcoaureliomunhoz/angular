import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadTarefaComponent } from './cad-tarefa.component';

describe('CadTarefaComponent', () => {
  let component: CadTarefaComponent;
  let fixture: ComponentFixture<CadTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
