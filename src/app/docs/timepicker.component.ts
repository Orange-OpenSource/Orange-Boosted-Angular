import { Component } from '@angular/core';

@Component({
  selector: 'doc-timepicker',
  template: `
    <docs-wrapper component="Timepicker">
        <h3>Demo</h3>
        <demo-timepicker></demo-timepicker>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTimepicker {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/timepicker.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/timepicker.component.ts')
  };
}