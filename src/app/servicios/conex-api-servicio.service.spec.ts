import { TestBed } from '@angular/core/testing';

import { ConexApiServicioService } from './conex-api-servicio.service';

describe('ConexApiServicioService', () => {
  let service: ConexApiServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexApiServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
