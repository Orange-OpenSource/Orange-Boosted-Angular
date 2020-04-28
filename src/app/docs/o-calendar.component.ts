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
      <p class="h6 text-primary">Warning ! : No longer supported, available under version 5.2.0</p>
      <h3>Demo</h3>
      <img src="../../assets/gif/calendar.gif" alt="this is a o-calendar component gif" width=270/>
      <h3>Usage</h3>
      <div [innerHtml]=docContent></div>
      <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocOCalendarComponent {
  public docContent = require('html-loader!markdown-loader!./o-calendar.component.md');
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/o-calendar.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/o-calendar.component.ts')
  };
}
