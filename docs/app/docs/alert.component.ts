import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-alert',
  template: `
    <docs-wrapper component="Alert">
        <h3>Demo</h3>
        <demo-alert></demo-alert>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocAlert implements OnInit {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/alert.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/alert.component.ts')
  };
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
    this._analytics.trackPageViews();
  }
}
