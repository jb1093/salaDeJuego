import { TestBed } from '@angular/core/testing';

import { TttGuard } from './ttt.guard';

describe('TttGuard', () => {
  let guard: TttGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TttGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
