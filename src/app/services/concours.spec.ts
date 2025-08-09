import { TestBed } from '@angular/core/testing';

import { Concours } from './concours';

describe('Concours', () => {
  let service: Concours;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Concours);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
