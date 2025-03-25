import { TestBed } from '@angular/core/testing';

import { GetAllPersonsService } from './get-all-persons.service';

describe('GetAllPersonsService', () => {
  let service: GetAllPersonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllPersonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
