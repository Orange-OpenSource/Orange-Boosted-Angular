import { Component } from '@angular/core';

@Component({
  selector: 'doc-progress-bar',
  template: `
    <docs-wrapper component="Progress Bar">
      <h3>Demo</h3>
      <demo-progress-bar></demo-progress-bar>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocProgressBar {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/progress-bar.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/progress-bar.component.ts')
  };
}
