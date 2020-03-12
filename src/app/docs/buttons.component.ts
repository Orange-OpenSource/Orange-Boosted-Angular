import { Component } from '@angular/core';

@Component({
  selector: 'doc-buttons',
  template: `
    <docs-wrapper component="Buttons">
      <h3>Demo</h3>
      <demo-buttons></demo-buttons>
      <h3 class="mt-3">Usage</h3>
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