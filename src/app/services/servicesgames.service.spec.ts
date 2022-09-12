import { TestBed } from '@angular/core/testing';

import { ServicesgamesService } from './servicesgames.service';

describe('ServicesgamesService', () => {
  let service: ServicesgamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesgamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
