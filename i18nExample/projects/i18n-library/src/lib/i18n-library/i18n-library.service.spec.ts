import { TestBed } from '@angular/core/testing';

import { I18nLibraryService } from './i18n-library.service';

describe('I18nLibraryService', () => {
  let service: I18nLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I18nLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
