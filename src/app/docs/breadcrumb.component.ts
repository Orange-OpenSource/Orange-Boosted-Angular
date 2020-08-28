import { Component } from '@angular/core';

@Component({
  selector: 'doc-breadcrumb',
  template: `
    <docs-wrapper component="Breadcrumb">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/breadcrumb">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-breadcrumb></demo-breadcrumb>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocBreadcrumbComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/breadcrumb.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/breadcrumb.component.ts')
  };
}
