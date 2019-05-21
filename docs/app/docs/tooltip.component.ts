import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-tooltip',
  template: `
    <docs-wrapper component="Tooltip">
        <h3>Demo</h3>
        <demo-tooltip></demo-tooltip>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTooltip implements OnInit {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/tooltip.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/tooltip.component.ts')
  };
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
      this._analytics.trackPageViews();
  }
}
