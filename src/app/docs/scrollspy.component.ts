import { Component } from '@angular/core';

@Component({
  selector: 'doc-scrollspy',
  template: `
    <docs-wrapper component="Scrollspy">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/scrollspy">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-scrollspy></demo-scrollspy>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocScrollspyComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/scrollspy.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/scrollspy.component.ts')
  };
}
