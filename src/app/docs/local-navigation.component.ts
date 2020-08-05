import { Component } from '@angular/core';

@Component({
  selector: 'doc-local-navigation',
  template: `
    <docs-wrapper component="Local-Navigation">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/local-navigation">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-local-navigation></demo-local-navigation>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocLocalNavigationComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/local-navigation.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/local-navigation.component.ts')
  };
}
