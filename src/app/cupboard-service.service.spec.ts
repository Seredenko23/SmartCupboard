import { TestBed } from '@angular/core/testing';

import { CupboardServiceService } from './cupboard-service.service';

describe('CupboardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CupboardServiceService = TestBed.get(CupboardServiceService);
    expect(service).toBeTruthy();
  });
});
