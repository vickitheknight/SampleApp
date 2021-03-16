import { TestBed } from '@angular/core/testing';

import { RepositaryService } from './repositary.service';

describe('RepositaryService', () => {
  let service: RepositaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
