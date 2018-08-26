import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadTarefaReativaComponent } from './cad-tarefa-reativa.component';

describe('CadTarefaReativaComponent', () => {
  let component: CadTarefaReativaComponent;
  let fixture: ComponentFixture<CadTarefaReativaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadTarefaReativaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadTarefaReativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
