import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembreteListagemComponent } from './lembrete-listagem.component';

describe('LembreteListagemComponent', () => {
  let component: LembreteListagemComponent;
  let fixture: ComponentFixture<LembreteListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembreteListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembreteListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
