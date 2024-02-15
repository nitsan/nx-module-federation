import { TestBed } from '@angular/core/testing';

import { NitsanService } from './nitsan.service';

describe('NitsanService', () => {
  let service: NitsanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NitsanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
