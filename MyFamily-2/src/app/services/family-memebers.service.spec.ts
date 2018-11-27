import { TestBed } from '@angular/core/testing';

import { FamilyMemebersService } from './family-memebers.service';

describe('FamilyMemebersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyMemebersService = TestBed.get(FamilyMemebersService);
    expect(service).toBeTruthy();
  });
});
