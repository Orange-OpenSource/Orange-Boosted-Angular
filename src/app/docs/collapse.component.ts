import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-collapse',
  template: `
    <docs-wrapper component="Collapse">
      <h3>Demo</h3>
      <demo-collapse></demo-collapse>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocCollapse implements OnInit {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/collapse.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/collapse.component.ts')
  };

  constructor(private _analytics: Analytics) {}
  
  public ngOnInit(): void {
      // this._analytics.trackPageViews();
  }
}