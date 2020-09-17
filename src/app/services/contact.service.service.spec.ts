import { TestBed } from '@angular/core/testing';

import { Contact.ServiceService } from './contact.service.service';

describe('Contact.ServiceService', () => {
  let service: Contact.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contact.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
