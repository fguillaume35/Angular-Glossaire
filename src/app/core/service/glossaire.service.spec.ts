import { TestBed } from '@angular/core/testing';

import { GlossaireService } from './glossaire.service';

describe('GlossaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlossaireService = TestBed.get(GlossaireService);
    expect(service).toBeTruthy();
  });
});
