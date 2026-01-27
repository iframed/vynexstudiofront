import { TestBed } from '@angular/core/testing';

import { AdsAnalyticsService } from './ads-analytics.service';

describe('AdsAnalyticsService', () => {
  let service: AdsAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdsAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
