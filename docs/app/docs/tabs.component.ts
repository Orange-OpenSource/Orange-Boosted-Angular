import { Component } from '@angular/core';

@Component({
  selector: 'doc-tabs',
  template: `
    <docs-wrapper component="Tabs">
        <h3>Demo</h3>
        <demo-tabs></demo-tabs>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTabs {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/tabs.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/tabs.component.ts')
  };
}
