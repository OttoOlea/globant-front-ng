import { TestBed } from '@angular/core/testing';

import { ApiGlobantService } from './api-globant.service';

describe('ApiGlobantService', () => {
  let service: ApiGlobantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGlobantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
