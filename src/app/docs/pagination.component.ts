import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-pagination',
  template: `
    <docs-wrapper component="Pagination">
        <h3>Demo</h3>
        <demo-pagination></demo-pagination>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocPagination implements OnInit {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/pagination.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/pagination.component.ts')
  };
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
      // this._analytics.trackPageViews();
  }
}
