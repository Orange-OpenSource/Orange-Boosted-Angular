import { Component } from '@angular/core';

@Component({
  selector: 'doc-popover',
  styles: [`
    p {
      margin-top: 1rem;
    }

    demo-popover + h3 {
      margin-top: 1.25rem;
    }

    code span {
      font-weight: bold;
    }
  `],
  template: `
    <docs-wrapper component="Popover">
        <h3>Demo</h3>
        <demo-popover></demo-popover>
        <h3>Usage</h3>
        <div [innerHtml]=docContent></div>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocPopover {
  public docContent = require('html-loader!markdown-loader!./popover.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/popover.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/popover.component.ts')
  };
}