import { Component } from '@angular/core';

@Component({
  selector: 'doc-buttons',
  template: `
    <docs-wrapper component="Buttons">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer" href="https://ng-bootstrap.github.io/#/components/buttons/examples">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <h4 class="mt-3">Checkbox and radio buttons</h4>
      <demo-buttons></demo-buttons>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocButtons {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/buttons.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/buttons.component.ts')
  };
}