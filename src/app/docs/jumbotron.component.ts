import { Component } from '@angular/core';

@Component({
  selector: 'doc-jumbotron',
  template: `
    <docs-wrapper component="Jumbotron">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/jumbotron">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-jumbotron></demo-jumbotron>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocJumbotronComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/jumbotron.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/jumbotron.component.ts')
  };
}
