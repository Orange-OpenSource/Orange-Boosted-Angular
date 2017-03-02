import { Component } from '@angular/core';

@Component({
  selector: 'doc-dropdown',
  template: `
    <docs-wrapper component="Dropdown">
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
