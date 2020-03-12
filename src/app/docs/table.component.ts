import { Component } from '@angular/core';

@Component({
  selector: 'doc-table',
  template: `
    <docs-wrapper component="Table">
        <h3>Demo</h3>
        <demo-table></demo-table>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTable {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/table.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/table.component.ts')
  };
}