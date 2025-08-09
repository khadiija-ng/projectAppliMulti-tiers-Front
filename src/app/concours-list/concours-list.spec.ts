import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcoursList } from './concours-list';

describe('ConcoursList', () => {
  let component: ConcoursList;
  let fixture: ComponentFixture<ConcoursList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcoursList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcoursList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
