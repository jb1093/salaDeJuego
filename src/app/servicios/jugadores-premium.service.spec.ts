import { TestBed } from '@angular/core/testing';

import { JugadoresPremiumService } from './jugadores-premium.service';

describe('JugadoresPremiumService', () => {
  let service: JugadoresPremiumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JugadoresPremiumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
