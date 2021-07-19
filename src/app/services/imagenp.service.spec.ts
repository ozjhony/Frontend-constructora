import { TestBed } from '@angular/core/testing';

import { ImagenpService } from './imagenp.service';

describe('ImagenpService', () => {
  let service: ImagenpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagenpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
