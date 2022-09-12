import { TestBed } from '@angular/core/testing';

import { ServicesPlataformService } from './services-plataform.service';

describe('ServicesPlataformService', () => {
  let service: ServicesPlataformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPlataformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
