import { TestBed } from '@angular/core/testing';

import { QuienSoyService } from './quien-soy.service';

describe('QuienSoyService', () => {
  let service: QuienSoyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuienSoyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
