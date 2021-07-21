import { Component } from '@angular/core';

@Component({
  selector: 'doc-stepbar',
  template: `
    <docs-wrapper component="Stepped process">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/5.0/components/stepped-process/">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-stepbar></demo-stepbar>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocStepbarComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/stepbar.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/stepbar.component.ts')
  };
}
