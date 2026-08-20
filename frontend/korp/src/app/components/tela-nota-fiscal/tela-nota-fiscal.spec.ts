import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaNotaFiscal } from './tela-nota-fiscal';

describe('TelaNotaFiscal', () => {
  let component: TelaNotaFiscal;
  let fixture: ComponentFixture<TelaNotaFiscal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaNotaFiscal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaNotaFiscal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
