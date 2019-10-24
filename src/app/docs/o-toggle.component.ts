import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-o-toggle',
  styles: [`
    demo-o-toggle + h3 {
      margin-top: 1.25rem;
    }
  `],
  template: `
    <docs-wrapper component="Toggle">
      <h3>Demo</h3>
      <demo-o-toggle></demo-o-toggle>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOToggle implements OnInit {
  public docContent = require('html-loader!markdown-loader!./o-toggle.component.md');

  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-toggle.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/o-toggle.component.ts')
  };

  constructor(private _analytics: Analytics) {}

  public ngOnInit(): void {
      // this._analytics.trackPageViews();
  }
}