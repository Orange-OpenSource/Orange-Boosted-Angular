import { Component } from '@angular/core';

@Component({
  selector: 'doc-o-navbar',
  styles: [`
    demo-o-navbar + h3 {
      margin-top: 1.25rem;
    }
  `],
  template: `
    <docs-wrapper component="Navbar">
      <p class="h6 text-primary">Warning ! : No longer supported, available under version 5.1.9</p>
      <h3>Demo</h3>
      <img src="../../assets/img/navbar.PNG" alt="this is a o-navbar component png" width=650/>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocONavbarComponent {
  public docContent = require('html-loader!markdown-loader!./o-navbar.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-navbar.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/o-navbar.component.ts')
  };
}
