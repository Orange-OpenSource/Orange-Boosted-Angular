import { Component } from '@angular/core';

@Component({
  selector: 'doc-modal',
  template: `
    <docs-wrapper component="Modal">
      <demo-modal></demo-modal>
      <template ngbModalContainer></template>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocModal {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/modal.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/modal.component.ts')
  };
}
