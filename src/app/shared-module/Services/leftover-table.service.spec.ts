import { TestBed } from '@angular/core/testing';

import { LeftoverTableService } from './leftover-table.service';

describe('LeftoverTableService', () => {
  let service: LeftoverTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeftoverTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
