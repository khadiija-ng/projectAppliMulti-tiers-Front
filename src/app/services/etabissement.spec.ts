import { TestBed } from '@angular/core/testing';

import { Etabissement } from './etabissement';

describe('Etabissement', () => {
  let service: Etabissement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Etabissement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
