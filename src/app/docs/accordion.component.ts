import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-accordion',
  template: `
    <docs-wrapper component="Accordion">
      <h3>Demo</h3>
      <demo-accordion></demo-accordion>
      <h3 class="mt-3">Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocAccordion implements OnInit {
  public docContent = require('html-loader!markdown-loader!./accordion.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/accordion.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/accordion.component.ts')
  };

  constructor(private _analytics: Analytics) {}

  public ngOnInit(): void {
    // this._analytics.trackPageViews();
  }
}