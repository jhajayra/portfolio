import { TestBed } from '@angular/core/testing';

import { BotonLoginService } from './boton-login.service';

describe('BotonLoginService', () => {
  let service: BotonLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotonLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
