import { Component } from '@angular/core';

@Component({
  selector: 'doc-priority-nav',
  template: `
    <docs-wrapper component="Priority Nav">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://boosted.orange.com/docs/4.5/components/priority-nav">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <div [innerHtml]=docContent></div>
      <demo-priority-nav></demo-priority-nav>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocPriorityNavComponent {
    public docContent = require('html-loader!markdown-loader!./priority-nav.component.md');
    public demoSnippets = {
        markup: require('!!prismjs-loader?lang=html!../demos/priority-nav.component.html'),
        typescript: require('!!prismjs-loader?lang=typescript!../demos/priority-nav.component.ts')
    };
}
