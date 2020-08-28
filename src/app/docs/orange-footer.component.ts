import { Component } from '@angular/core';

@Component({
  selector: 'doc-orange footer',
  template: `
    <docs-wrapper component="Orange footer">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/orange-footer">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-orange-footer></demo-orange-footer>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOrangeFooterComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/orange-footer.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/orange-footer.component.ts')
  };
}
