import { Component } from '@angular/core';

@Component({
  selector: 'doc-o-toast',
  template: `
    <docs-wrapper component="Toast">
        <p class="h6 text-primary">Warning ! : No longer supported, available under version 5.1.9</p>
        <h3>Demo</h3>
        <img src="../../assets/gif/toast.gif" alt="this is a o-toast component gif" width=950/>
        <h3 class="mt-3">Usage</h3>
        <div [innerHtml]=docContent></div>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOToastComponent {
  public docContent = require('html-loader!markdown-loader!./o-toast.component.md');
  public demoSnippets = {
      markup: require('!!prismjs-loader?lang=html!../demos/o-toast.component.html'),
      typescript: require('!!prismjs-loader?lang=typescript!../demos/o-toast.component.ts')
  };
}
