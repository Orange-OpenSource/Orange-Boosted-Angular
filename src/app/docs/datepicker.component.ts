import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-datepicker',
  template: `
    <docs-wrapper component="Datepicker">
      <h3>Demo</h3>
      <demo-datepicker></demo-datepicker>
      <h3 class="mt-3">Usage</h3>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocDatepicker implements OnInit {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/datepicker.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/datepicker.component.ts')
  };

  constructor(private _analytics: Analytics) {}

  public ngOnInit(): void { }
}