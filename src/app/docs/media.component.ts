import { Component } from '@angular/core';

@Component({
  selector: 'doc-media',
  template: `
    <docs-wrapper component="Media">
      <p class="mt-4">Check the <a target="_blank" rel="noopener noreferrer"
      href="https://boosted.orange.com/docs/4.5/components/media-object">ng-bootstrap's original component documentation</a>.</p>
      <h3>Demo</h3>
      <demo-media></demo-media>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocMediaComponent {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/media.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/media.component.ts')
  };
}
