import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nLibraryComponent } from './i18n-library.component';

describe('I18nLibraryComponent', () => {
  let component: I18nLibraryComponent;
  let fixture: ComponentFixture<I18nLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I18nLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(I18nLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
