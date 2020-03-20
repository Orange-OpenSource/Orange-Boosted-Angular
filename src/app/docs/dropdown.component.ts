import { Component } from '@angular/core';

@Component({
  selector: 'doc-dropdown',
  template: `
    <docs-wrapper component="Dropdown">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer" href="https://ng-bootstrap.github.io/#/components/dropdown/examples">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-dropdown></demo-dropdown>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocDropdown {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/dropdown.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/dropdown.component.ts')
  };
}