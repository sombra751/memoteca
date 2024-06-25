import { TestBed } from '@angular/core/testing';

import { PensamentosService } from './pensamentos.service';

describe('PensamentosService', () => {
  let service: PensamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
