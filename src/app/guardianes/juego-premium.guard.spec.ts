import { TestBed } from '@angular/core/testing';

import { JuegoPremiumGuard } from './juego-premium.guard';

describe('JuegoPremiumGuard', () => {
  let guard: JuegoPremiumGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JuegoPremiumGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
