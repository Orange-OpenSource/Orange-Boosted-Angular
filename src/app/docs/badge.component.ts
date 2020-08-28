import { Component } from '@angular/core';

@Component({
  selector: 'doc-badge',
  template: `
    <docs-wrapper component="Badge">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/badge">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-badge></demo-badge>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocBadgeComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/badge.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/badge.component.ts')
  };
}
