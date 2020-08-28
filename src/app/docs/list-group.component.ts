import { Component } from '@angular/core';

@Component({
  selector: 'doc-list-group',
  template: `
    <docs-wrapper component="List-Group">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/list-group">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-list-group></demo-list-group>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocListGroupComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/list-group.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/list-group.component.ts')
  };
}
