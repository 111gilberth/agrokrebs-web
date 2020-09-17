import { TestBed } from '@angular/core/testing';

import { Credit.ServiceService } from './credit.service.service';

describe('Credit.ServiceService', () => {
  let service: Credit.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Credit.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
