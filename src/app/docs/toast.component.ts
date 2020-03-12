import { Component } from '@angular/core';

@Component({
  selector: 'doc-toast',
  template: `
    <docs-wrapper component="Toast">
        <h3>Demo</h3>
        <demo-toast></demo-toast>
        <h3 class="mt-3">Usage</h3>
        <div [innerHtml]=docContent></div>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocToast {
  public docContent = require('html-loader!markdown-loader!./toast.component.md');
  public demoSnippets = {
      markup: require('!!prismjs-loader?lang=html!../demos/toast.component.html'),
      typescript: require('!!prismjs-loader?lang=typescript!../demos/toast.component.ts')
  };
}