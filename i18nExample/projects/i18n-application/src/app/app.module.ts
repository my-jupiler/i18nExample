import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { I18nLibraryModule, I18nLibrary2Module } from 'i18n-library';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    I18nLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
