import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEstoque } from './tela-estoque';

describe('TelaEstoque', () => {
  let component: TelaEstoque;
  let fixture: ComponentFixture<TelaEstoque>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaEstoque]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaEstoque);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
