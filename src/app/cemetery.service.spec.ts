import { TestBed } from '@angular/core/testing';

import { CemeteryService } from './cemetery.service';

describe('CemeteryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CemeteryService = TestBed.get(CemeteryService);
    expect(service).toBeTruthy();
  });
});
