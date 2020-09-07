import { Component } from '@angular/core';

@Component({
  selector: 'doc-orange-megamenu',
  template: `
    <docs-wrapper component="Orange megamenu">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/orange-megamenu">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <div [innerHtml]=docContent></div>
      <demo-orange-megamenu></demo-orange-megamenu>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOrangeMegamenuComponent {
    public docContent = require('html-loader!markdown-loader!./priority-nav.component.md');
    public demoSnippets = {
        markup: require('!!prismjs-loader?lang=html!../demos/orange-megamenu.component.html'),
        typescript: require('!!prismjs-loader?lang=typescript!../demos/orange-megamenu.component.ts')
    };
}
