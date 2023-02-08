import { TestBed } from '@angular/core/testing';

import { videoGameService } from './videoGame';

describe('videoGameService', () => {
  let service: videoGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(videoGameService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
