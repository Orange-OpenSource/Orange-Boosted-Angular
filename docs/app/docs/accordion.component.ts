import { Component } from '@angular/core';

@Component({
  selector: 'doc-accordion',
  template: `
    <docs-wrapper component="Accordion">
      <h3>Demo</h3>
      <demo-accordion></demo-accordion>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocAccordion {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/accordion.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/accordion.component.ts')
  };
}
