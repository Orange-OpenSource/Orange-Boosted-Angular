import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-toast',
  template: `
    <docs-wrapper component="Toast">
        <h3>Demo</h3>
        <demo-toast></demo-toast>
        <br>
        <h3>Usage</h3>
        <div [innerHtml]=docContent></div>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocToast implements OnInit {
    public docContent = require('html-loader!markdown-loader!./toast.component.md');
    public demoSnippets = {
        markup: require('!!prismjs-loader?lang=html!../demos/toast.component.html'),
        typescript: require('!!prismjs-loader?lang=typescript!../demos/toast.component.ts')
    };
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
      // this._analytics.trackPageViews();
  }
}
