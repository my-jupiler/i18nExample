import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyI18nComponent2Component } from './my-i18n-component2.component';

describe('MyI18nComponent2Component', () => {
  let component: MyI18nComponent2Component;
  let fixture: ComponentFixture<MyI18nComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyI18nComponent2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyI18nComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
