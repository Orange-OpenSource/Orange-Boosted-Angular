import { Component } from '@angular/core';

@Component({
  selector: 'doc-toast',
  template: `
    <docs-wrapper component="Toast">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
    href="https://ng-bootstrap.github.io/#/components/toast/examples">ng-bootstrap's original component documentation</a>.</p>
        <h3>Demo</h3>
        <demo-toast></demo-toast>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocToastComponent {
  public demoSnippets = {
      markup: require('!!prismjs-loader?lang=html!../demos/toast.component.html'),
      typescript: require('!!prismjs-loader?lang=typescript!../demos/toast.component.ts'),
      service: require('!!prismjs-loader?lang=typescript!../demos/toast-service.ts'),
      container: require('!!prismjs-loader?lang=typescript!../demos/toasts-container.component.ts')
  };
}
