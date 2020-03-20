import { Component } from '@angular/core';

@Component({
  selector: 'doc-accordion',
  template: `
    <docs-wrapper component="Accordion">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer" href="https://ng-bootstrap.github.io/#/components/accordion/examples">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-accordion></demo-accordion>
      <h3 class="mt-3">Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocAccordion {
  public docContent = require('html-loader!markdown-loader!./accordion.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/accordion.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/accordion.component.ts')
  };
}