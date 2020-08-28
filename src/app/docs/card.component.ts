import { Component } from '@angular/core';

@Component({
  selector: 'doc-card',
  template: `
    <docs-wrapper component="Card">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/card">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-card></demo-card>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocCardComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/card.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/card.component.ts')
  };
}
