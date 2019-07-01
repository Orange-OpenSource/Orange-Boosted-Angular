import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-tabs',
  template: `
    <docs-wrapper component="Tabs">
        <h3>Demo</h3>
        <demo-tabs></demo-tabs>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTabs implements OnInit {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/tabs.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/tabs.component.ts')
  };
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
      // this._analytics.trackPageViews();
  }
}
