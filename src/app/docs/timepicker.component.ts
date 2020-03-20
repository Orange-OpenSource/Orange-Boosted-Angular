import { Component } from '@angular/core';

@Component({
  selector: 'doc-timepicker',
  template: `
    <docs-wrapper component="Timepicker">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer" href="https://ng-bootstrap.github.io/#/components/timepicker/examples">ng-bootstrap's original component documentation</a>.</p>
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