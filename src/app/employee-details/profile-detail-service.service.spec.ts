import { TestBed } from '@angular/core/testing';

import { ProfileDetailServiceService } from './profile-detail-service.service';

describe('ProfileDetailServiceService', () => {
  let service: ProfileDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
