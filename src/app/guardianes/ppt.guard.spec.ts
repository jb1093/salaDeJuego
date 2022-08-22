import { TestBed } from '@angular/core/testing';

import { PptGuard } from './ppt.guard';

describe('PptGuard', () => {
  let guard: PptGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PptGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
