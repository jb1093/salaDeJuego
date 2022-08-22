import { TestBed } from '@angular/core/testing';

import { AdvGuard } from './adv.guard';

describe('AdvGuard', () => {
  let guard: AdvGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdvGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
