import { Component } from '@angular/core';

@Component({
  selector: 'doc-popover',
  styles: [`
    p {
      margin-top: 1rem;
    }

    code span {
      font-weight: bold;
    }
  `],
  template: `
    <docs-wrapper component="Popover">
        <demo-popover></demo-popover>
        <p>By default a popover is closed by clicking on its trigger element.
        To close by clicking outside you'll have to use custom directives
         on the trigger element :</p>
        <pre class="language-html">
          <code class="language-html">
            <span>#p="ngbPopover" (document:click)="p.close()"
            (click)="$event.stopPropagation()"</span>
          </code>
        </pre>
        <code-box [snippets]="demoSnippets"></code-box>
    </docs-wrapper>
  `
})
export class DocPopover {
  public demoSnippets = {
    markup: require('!!prismjs-loader?lang=html!../demos/popover.component.html'),
    typescript: require('!!prismjs-loader?lang=typescript!../demos/popover.component.ts')
  };
}
