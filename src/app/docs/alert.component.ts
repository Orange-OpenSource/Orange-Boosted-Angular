import { Component } from '@angular/core';

@Component({
  selector: 'doc-alert',
  template: `
    <docs-wrapper component="Alert">
        <h3>Demo</h3>
        <demo-alert></demo-alert>
        <div [innerHtml]=docContent></div>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocAlert {
  // public docContent = require('html-loader!markdown-loader!./close.component.md');  <h3 class="mt-3">Usage</h3>
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/alert.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/alert.component.ts')
  };
}
