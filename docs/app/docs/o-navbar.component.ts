import { Component } from '@angular/core';

@Component({
  selector: 'doc-o-navbar',
  template: `
    <docs-wrapper component="Navbar">
      <h3>Demo</h3>
      <p>Check out this documentation navbar for a nice example.</p>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocONavbar {
  public docContent = require('html-loader!markdown-loader!./o-navbar.component.md');

  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-navbar.component.html')
  };
}
