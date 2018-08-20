import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetUsuarioComponent } from './det-usuario.component';

describe('DetUsuarioComponent', () => {
  let component: DetUsuarioComponent;
  let fixture: ComponentFixture<DetUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
