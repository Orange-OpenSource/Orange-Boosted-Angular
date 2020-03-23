import { Component } from '@angular/core';

@Component({
  selector: 'doc-o-toast',
  template: `
    <docs-wrapper component="Toast">
        <h3>Demo</h3>
        <demo-o-toast></demo-o-toast>
        <h3 class="mt-3">Usage</h3>
        <div [innerHtml]=docContent></div>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOToast {
  public docContent = require('html-loader!markdown-loader!./o-toast.component.md');
  public demoSnippets = {
      markup: require('!!prismjs-loader?lang=html!../demos/o-toast.component.html'),
      typescript: require('!!prismjs-loader?lang=typescript!../demos/o-toast.component.ts')
  };
}