import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-accordion',
  template: `
    <docs-wrapper component="Accordion">
      <h3>Demo</h3>
      <demo-accordion></demo-accordion>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocAccordion implements OnInit {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/accordion.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/accordion.component.ts')
  };

  constructor(private _analytics: Analytics) {}

  public ngOnInit(): void {
    // this._analytics.trackPageViews();
  }
}