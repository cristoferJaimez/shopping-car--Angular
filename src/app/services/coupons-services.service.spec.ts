import { TestBed } from '@angular/core/testing';

import { CouponsServicesService } from './coupons-services.service';

describe('CouponsServicesService', () => {
  let service: CouponsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouponsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
