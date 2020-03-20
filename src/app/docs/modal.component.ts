import { Component } from '@angular/core';

@Component({
  selector: 'doc-modal',
  template: `
    <docs-wrapper component="Modal">
    <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer" href="https://ng-bootstrap.github.io/#/components/modal/examples">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-modal></demo-modal>
      <ng-template ngbModalContainer></ng-template>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocModal{
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/modal.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/modal.component.ts')
  };
}
