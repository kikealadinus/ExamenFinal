import { TestBed } from '@angular/core/testing';

import { AutoserviciosService } from './autoservicios.service';

describe('AutoserviciosService', () => {
  let service: AutoserviciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoserviciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
