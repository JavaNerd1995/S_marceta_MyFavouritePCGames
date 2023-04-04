import { TestBed } from '@angular/core/testing';

import { ConjunctionService } from './conjunction.service';

describe('ConjunctionService', () => {
  let service: ConjunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
