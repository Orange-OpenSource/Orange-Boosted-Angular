import { Component } from '@angular/core';

@Component({
  selector: 'doc-o-calendar',
  styles: [`
    demo-o-calendar + h3 {
      margin-top: 1.25rem;
    }
  `],
  template: `
    <docs-wrapper component="Calendar">
      <h3>Demo</h3>
      <demo-o-calendar></demo-o-calendar>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOCalendar {
  public docContent = require('html-loader!markdown-loader!./o-calendar.component.md');

  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-calendar.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/o-calendar.component.ts')
  };
}
