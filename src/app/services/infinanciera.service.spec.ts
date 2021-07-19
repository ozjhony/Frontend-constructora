import { TestBed } from '@angular/core/testing';

import { InfinancieraService } from './infinanciera.service';

describe('InfinancieraService', () => {
  let service: InfinancieraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfinancieraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
