import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'doc-dropdown',
  template: `
    <docs-wrapper component="Dropdown">
      <h3>Demo</h3>
      <demo-dropdown></demo-dropdown>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocDropdown implements OnInit {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/dropdown.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/dropdown.component.ts')
  };
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
    this._analytics.trackPageViews();
}
}
