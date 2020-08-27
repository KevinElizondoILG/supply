import { TestBed } from '@angular/core/testing';

import { DetrackService } from './detrack.service';

describe('DetrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetrackService = TestBed.get(DetrackService);
    expect(service).toBeTruthy();
  });
});
