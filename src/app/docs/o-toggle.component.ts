import { Component } from '@angular/core';

@Component({
  selector: 'doc-o-toggle',
  styles: [`
    demo-o-toggle + h3 {
      margin-top: 1.25rem;
    }
  `],
  template: `
    <docs-wrapper component="Toggle">
      <p class="h6 text-primary">Warning ! : No longer supported, available under version 5.2.0</p>
      <h3>Demo</h3>
      <img src="../../assets/gif/toggle.gif" alt="this is a o-toggle component gif" width=150/>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOToggleComponent {
  public docContent = require('html-loader!markdown-loader!./o-toggle.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-toggle.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/o-toggle.component.ts')
  };
}
