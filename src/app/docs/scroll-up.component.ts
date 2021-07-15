import { Component } from '@angular/core';

@Component({
  selector: 'doc-scroll-up',
  styles: [`
    .fake-block { height: 400rem; }
  `],
  template: `
    <docs-wrapper component="Scroll Up">
      <h3>Demo</h3>
      <p>Scroll down this page to see a nice example.</p>
      <code-box [snippets]="demoSnippets"></code-box>
      <div class="fake-block"></div>
    </docs-wrapper>
  `
})
export class DocScrollUpComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/scroll-up.component.html')
  };
}
