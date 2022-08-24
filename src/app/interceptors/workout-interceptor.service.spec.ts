import { TestBed } from '@angular/core/testing';

import { WorkoutInterceptorService } from './workout-interceptor.service';

describe('WorkoutInterceptorService', () => {
  let service: WorkoutInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
