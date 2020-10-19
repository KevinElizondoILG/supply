import { TestBed } from '@angular/core/testing';

import { PosthookService } from './posthook.service';

describe('PosthookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosthookService = TestBed.get(PosthookService);
    expect(service).toBeTruthy();
  });
});
