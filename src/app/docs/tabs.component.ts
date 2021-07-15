import { Component } from '@angular/core';

@Component({
  selector: 'doc-tabs',
  template: `
    <docs-wrapper component="Tabs">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/5.0/components/navs-tabs/">Boosted  original component documentation</a>.</p>
      <p class="h6 text-primary">Warning ! : ngb-tabset no longer supported, available under version 7.1.1. Please use Nav.</p>
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://ng-bootstrap.github.io/#/components/tabset">ngb-tabset</a>.</p>
      <h3>Demo</h3>
      <demo-tabs></demo-tabs>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocTabsComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/tabs.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/tabs.component.ts')
  };
}
