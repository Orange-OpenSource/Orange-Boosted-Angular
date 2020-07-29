import { Component } from '@angular/core';

@Component({
  selector: 'doc-orange popin',
  template: `
    <docs-wrapper component="Orange popin">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/orange-popin">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-orange-popin></demo-orange-popin>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOrangePopinComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/orange-popin.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/orange-popin.component.ts')
  };
}
