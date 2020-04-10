import { Component } from '@angular/core';

@Component({
  selector: 'doc-typeahead',
  template: `
    <docs-wrapper component="Typeahead">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://ng-bootstrap.github.io/#/components/typeahead/examples">ng-bootstrap's original component documentation</a>.</p>
        <h3>Demo</h3>
        <demo-typeahead></demo-typeahead>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTypeaheadComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/typeahead.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/typeahead.component.ts')
  };
}
