import { Component } from '@angular/core';

@Component({
  selector: 'doc-form',
  template: `
    <docs-wrapper component="Form">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/5.0/forms/overview">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-form></demo-form>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocFormComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/form.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/form.component.ts')
  };
}
