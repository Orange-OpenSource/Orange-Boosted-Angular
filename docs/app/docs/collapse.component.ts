import { Component } from '@angular/core';

@Component({
  selector: 'doc-collapse',
  template: `
    <docs-wrapper component="Collapse">
      <demo-collapse></demo-collapse>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocCollapse {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/collapse.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/collapse.component.ts')
  };
}
