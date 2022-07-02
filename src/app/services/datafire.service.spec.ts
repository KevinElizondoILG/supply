import { TestBed } from '@angular/core/testing';

import { DatafireService } from './datafire.service';

describe('DatafireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatafireService = TestBed.get(DatafireService);
    expect(service).toBeTruthy();
  });
});
