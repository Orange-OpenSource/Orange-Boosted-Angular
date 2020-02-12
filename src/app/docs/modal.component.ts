import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-modal',
  template: `
    <docs-wrapper component="Modal">
      <h3>Demo</h3>
      <demo-modal></demo-modal>
      <ng-template ngbModalContainer></ng-template>
      <h3 class="mt-3">Usage</h3>
       <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocModal implements OnInit {
  public docContent = require('html-loader!markdown-loader!./close.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/modal.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/modal.component.ts')
  };

  constructor(private _analytics: Analytics ) {}

  public ngOnInit(): void {
    // this._analytics.trackPageViews();
  }
}
