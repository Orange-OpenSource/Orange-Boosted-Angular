import { Component } from '@angular/core';

@Component({
  selector: 'doc-datepicker',
  template: `
    <docs-wrapper component="Datepicker">
      <h3>Demo</h3>
      <demo-datepicker></demo-datepicker>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocDatepicker {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/datepicker.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/datepicker.component.ts'),
    css: require('!!prismjs-loader?lang=typescript!../demos/datepicker.component.scss')
  };
}