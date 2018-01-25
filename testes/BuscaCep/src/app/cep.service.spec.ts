import { TestBed, inject } from '@angular/core/testing';

import { CepServiceService } from './cep-service.service';

describe('CepServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CepServiceService]
    });
  });

  it('should be created', inject([CepServiceService], (service: CepServiceService) => {
    expect(service).toBeTruthy();
  }));
});
