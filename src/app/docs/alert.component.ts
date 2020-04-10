import { Component } from '@angular/core';

@Component({
  selector: 'doc-alert',
  template: `
    <docs-wrapper component="Alert">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://ng-bootstrap.github.io/#/components/alert/examples">ng-bootstrap's original component documentation</a>.</p>
        <h3>Demo</h3>
        <demo-alert></demo-alert>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocAlertComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/alert.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/alert.component.ts')
  };
}
