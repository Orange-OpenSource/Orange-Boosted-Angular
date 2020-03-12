import { Component } from '@angular/core';

@Component({
  selector: 'doc-tooltip',
  template: `
    <docs-wrapper component="Tooltip">
        <h3>Demo</h3>
        <demo-tooltip></demo-tooltip>
        <h3 class="mt-3">Usage</h3>
        <div [innerHtml]=docContent></div>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTooltip {
  public docContent = require('html-loader!markdown-loader!./tooltip.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/tooltip.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/tooltip.component.ts')
  };
}