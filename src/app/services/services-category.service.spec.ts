import { TestBed } from '@angular/core/testing';

import { ServicesCategoryService } from './services-category.service';

describe('ServicesCategoryService', () => {
  let service: ServicesCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
