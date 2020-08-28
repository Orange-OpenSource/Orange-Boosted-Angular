import { Component } from '@angular/core';

@Component({
  selector: 'doc-spinner',
  template: `
    <docs-wrapper component="Spinner">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/spinners">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-spinner></demo-spinner>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocSpinnerComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/spinner.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/spinner.component.ts')
  };
}
