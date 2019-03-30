import {TestBed} from '@angular/core/testing';

import {GraveService} from './grave.service';

describe('GraveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraveService = TestBed.get(GraveService);
    expect(service).toBeTruthy();
  });
});
