import { Component } from '@angular/core';

@Component({
  selector: 'doc-datepicker',
  template: `
    <docs-wrapper component="Datepicker">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer" href="https://ng-bootstrap.github.io/#/components/datepicker/examples">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <ul>
        <li>Simple datepicker</li>
        <li>Datepicker in a popup</li>
        <li>Range selection</li>
      </ul>
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