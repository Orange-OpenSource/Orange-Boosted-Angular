import { Component } from '@angular/core';

@Component({
  selector: 'doc-typeahead',
  template: `
    <docs-wrapper component="Typeahead">
        <h3>Demo</h3>
        <demo-typeahead></demo-typeahead>
        <div [innerHtml]=docContent></div>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTypeahead {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/typeahead.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/typeahead.component.ts')
  };
}