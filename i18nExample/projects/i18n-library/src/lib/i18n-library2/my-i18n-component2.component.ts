import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-i18n-component22',
  template:  `
  <p i18n="@@library.label2">Library label2</p>
  <button i18n="@@library.button2">Library Button2</button>
`
})
export class MyI18nComponentComponent2 implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
