import { Component, Input } from '@angular/core';

@Component({
    selector: 'code-box',
    styles: [`
        h4 {
            margin-top: 1.25rem;
        }
        .tab-content {
            border: 0;
            padding: 0;
        }
    `],
    template: `
        <h4 >Source</h4>
        <ngb-tabset class="code-box">
        <ngb-tab title="HTML">
            <template ngbTabContent>
                <pre class="language-html">
                    <code class="language-html" [innerHTML]="snippets.markup"></code>
                </pre>
            </template>
        </ngb-tab>
        <ngb-tab title="TypeScript">
            <template ngbTabContent>
                <pre class="language-typescript">
                    <code class="language-typescript" [innerHTML]="snippets.typescript"></code>
                </pre>
            </template>
        </ngb-tab>
    </ngb-tabset>
    `
})
export class CodeBox {
    @Input()
    public snippets: Object;
}
