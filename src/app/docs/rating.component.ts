import { Component } from '@angular/core';

@Component({
  selector: 'doc-rating',
  template: `
    <docs-wrapper component="Rating">
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