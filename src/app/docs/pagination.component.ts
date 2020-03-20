import { Component } from '@angular/core';

@Component({
  selector: 'doc-pagination',
  template: `
    <docs-wrapper component="Pagination">
        <h3>Demo</h3>
        <demo-pagination></demo-pagination>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocPagination {
  // public docContent = require('html-loader!markdown-loader!./pagination.component.md');         <h3>Usage</h3>        <div [innerHtml]=docContent></div>
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/pagination.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/pagination.component.ts')
  };
}