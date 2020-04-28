import { Component } from '@angular/core';

@Component({
  selector: 'doc-collapse',
  template: `
    <docs-wrapper component="Collapse">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://ng-bootstrap.github.io/#/components/collapse/examples">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-collapse></demo-collapse>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocCollapseComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/collapse.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/collapse.component.ts')
  };
}
