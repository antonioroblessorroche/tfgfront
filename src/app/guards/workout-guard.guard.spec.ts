import { TestBed } from '@angular/core/testing';

import { WorkoutGuardGuard } from './workout-guard.guard';

describe('WorkoutGuardGuard', () => {
  let guard: WorkoutGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WorkoutGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
