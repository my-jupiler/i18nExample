import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyI18nComponentComponent } from './my-i18n-component.component';

describe('MyI18nComponentComponent', () => {
  let component: MyI18nComponentComponent;
  let fixture: ComponentFixture<MyI18nComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyI18nComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyI18nComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
