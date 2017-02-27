import { Component } from '@angular/core';

@Component({
  selector: 'doc-o-scroll-top',
  styles: [`
    >>>docs-wrapper .container { margin-bottom: 100rem; }
  `],
  template: `
    <docs-wrapper component="OScrollTop">
      <h3>Demo</h3>
      <p>Scroll down this page to see a nice example.</p>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOScrollTop {
  public docContent = require('html-loader!markdown-loader!./o-scroll-top.component.md');

  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-scroll-top.component.html')
  };
}
