import { Component } from '@angular/core';

@Component({
  selector: 'doc-scroll-up',
  styles: [`
    .fake-block { height: 400rem; }
  `],
  template: `
    <docs-wrapper component="Scroll Up">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://boosted.orange.com/docs/4.4/components/scroll-up/">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <p>Scroll down this page to see a nice example.</p>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
      <div class="fake-block"></div>
    </docs-wrapper>
  `
})
export class DocScrollUpComponent {
  public docContent = require('html-loader!markdown-loader!./scroll-up.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/scroll-up.component.html')
  };
}
