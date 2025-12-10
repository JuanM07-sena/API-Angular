import { TestBed } from '@angular/core/testing';

import { DragonballApi } from '../dragonball-api';

describe('DragonballApi', () => {
  let service: DragonballApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonballApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
