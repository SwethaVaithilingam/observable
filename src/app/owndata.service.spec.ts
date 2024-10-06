import { TestBed } from '@angular/core/testing';

import { OwndataService } from './owndata.service';

describe('OwndataService', () => {
  let service: OwndataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwndataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
