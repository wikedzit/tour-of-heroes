import { TestBed, inject } from '@angular/core/testing';

import { HerpSearchService } from './hero-search.service';

describe('HerpSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerpSearchService]
    });
  });

  it('should be created', inject([HerpSearchService], (service: HerpSearchService) => {
    expect(service).toBeTruthy();
  }));
});
