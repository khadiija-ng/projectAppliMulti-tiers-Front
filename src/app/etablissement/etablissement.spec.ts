import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etablissement } from './etablissement';

describe('Etablissement', () => {
  let component: Etablissement;
  let fixture: ComponentFixture<Etablissement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etablissement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etablissement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
