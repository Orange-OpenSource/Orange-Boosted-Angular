import { Component } from '@angular/core';

@Component({
  selector: 'doc-pagination',
  template: `
    <docs-wrapper component="Pagination">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer" href="https://ng-bootstrap.github.io/#/components/pagination/examples">ng-bootstrap's original component documentation</a>.</p>
        <h3>Demo</h3>
        <demo-pagination></demo-pagination>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocPagination {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/pagination.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/pagination.component.ts')
  };
}