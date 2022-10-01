import { TestBed } from '@angular/core/testing';

import { NameuserGuard } from './nameuser.guard';

describe('NameuserGuard', () => {
  let guard: NameuserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NameuserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
