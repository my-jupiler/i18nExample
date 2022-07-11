import { NgModule } from '@angular/core';
import { I18nLibraryComponent } from './i18n-library.component';
import { MyI18nComponentComponent } from './my-i18n-component/my-i18n-component.component';
import { MyI18nComponent2Component } from './my-i18n-component2/my-i18n-component2.component';



@NgModule({
  declarations: [
    I18nLibraryComponent,
    MyI18nComponentComponent,
    MyI18nComponent2Component
  ],
  imports: [
  ],
  exports: [
    I18nLibraryComponent,
    MyI18nComponentComponent,
    MyI18nComponent2Component
  ]
})
export class I18nLibraryModule { }
