import { Component } from '@angular/core';

@Component({
  selector: 'doc-table',
  template: `
    <docs-wrapper component="Table">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://ng-bootstrap.github.io/#/components/table/examples">ng-bootstrap's original component documentation</a>.</p>
        <h3>Demo</h3>
        <demo-table></demo-table>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTableComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/table.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/table.component.ts')
  };
}
