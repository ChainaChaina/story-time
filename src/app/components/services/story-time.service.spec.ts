import { TestBed } from '@angular/core/testing';

import { StoryTimeService } from './story-time.service';

describe('StoryTimeService', () => {
  let service: StoryTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
