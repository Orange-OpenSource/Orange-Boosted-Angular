import { Component } from '@angular/core';

@Component({
  selector: 'doc-tooltip',
  template: `
    <docs-wrapper component="Tooltip">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://ng-bootstrap.github.io/#/components/tooltip/examples">ng-bootstrap's original component documentation</a>.</p>
        <h3>Demo</h3>
        <demo-tooltip></demo-tooltip>
        <h3 class="mt-3">Usage</h3>
        <div [innerHtml]=docContent></div>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTooltipComponent {
  public docContent = require('html-loader!markdown-loader!./tooltip.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/tooltip.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/tooltip.component.ts')
  };
}
