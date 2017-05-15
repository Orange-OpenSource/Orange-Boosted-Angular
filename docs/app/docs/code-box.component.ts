import { Component, Input } from '@angular/core';

@Component({
    selector: 'code-box',
    styles: [`
        h3 {
            margin-top: 1.25rem;
        }
        .tab-content {
            border: 0;
            padding: 0;
        }
    `],
    template: `
        <h3 >Source</h3>
        <ngb-tabset class="code-box">
        <ngb-tab title="HTML" *ngIf="snippets.markup">
            <ng-template ngbTabContent>
                <pre class="language-html"><code class="language-html" [innerHTML]="snippets.markup"></code></pre>
            </ng-template>
        </ngb-tab>
        <ngb-tab title="TypeScript" *ngIf="snippets.typescript">
            <ng-template ngbTabContent>
                <pre class="language-typescript"><code class="language-typescript" [innerHTML]="snippets.typescript"></code></pre>
            </ng-template>
        </ngb-tab>
    </ngb-tabset>
    `
})
export class CodeBox {
    @Input()
    public snippets: Object;
}
