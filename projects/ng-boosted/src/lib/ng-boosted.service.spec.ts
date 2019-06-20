import { TestBed } from '@angular/core/testing';

import { NgBoostedService } from './ng-boosted.service';

describe('NgBoostedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBoostedService = TestBed.get(NgBoostedService);
    expect(service).toBeTruthy();
  });
});
