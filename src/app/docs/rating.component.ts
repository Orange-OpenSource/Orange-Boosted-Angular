import { Component } from '@angular/core';

@Component({
  selector: 'doc-rating',
  template: `
    <docs-wrapper component="Rating">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer" href="https://ng-bootstrap.github.io/#/components/rating/examples">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-rating></demo-rating>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocRating {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/rating.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/rating.component.ts')
  };
}