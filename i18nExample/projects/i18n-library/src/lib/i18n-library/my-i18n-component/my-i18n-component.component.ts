import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-i18n-component',
  template:  `
  <p i18n="@@library.label">Library label</p>
  <button i18n="@@library.button">Library Button</button>
`,
  styleUrls: ['./my-i18n-component.component.css']
})
export class MyI18nComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
