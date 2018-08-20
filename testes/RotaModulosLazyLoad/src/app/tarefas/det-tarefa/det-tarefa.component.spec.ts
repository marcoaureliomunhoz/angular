import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetTarefaComponent } from './det-tarefa.component';

describe('DetTarefaComponent', () => {
  let component: DetTarefaComponent;
  let fixture: ComponentFixture<DetTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
