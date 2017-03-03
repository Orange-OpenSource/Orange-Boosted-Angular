import { Component } from '@angular/core';

@Component({
  selector: 'doc-o-switch',
  template: `
    <docs-wrapper component="Switch">
      <h3>Demo</h3>
      <demo-o-switch></demo-o-switch>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOSwitch {
  public docContent = require('html-loader!markdown-loader!./o-switch.component.md');

  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-switch.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/o-switch.component.ts')
  };
}
