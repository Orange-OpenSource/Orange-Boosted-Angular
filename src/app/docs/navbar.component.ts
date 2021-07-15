import { Component } from '@angular/core';

@Component({
  selector: 'doc-navbar',
  template: `
    <docs-wrapper component="Navbar">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://boosted.orange.com/docs/5.0/components/navbar/">boosted's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-navbar></demo-navbar>
      <ng-template ngbModalContainer></ng-template>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocNavbarComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/navbar.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/navbar.component.ts')
  };
}

