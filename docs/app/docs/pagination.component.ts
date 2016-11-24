import { Component } from '@angular/core';

@Component({
  selector: 'doc-pagination',
  template: `
    <docs-wrapper component="Pagination">
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
