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
        :host {
            display: block;
            margin-bottom: 30px;
        }
    `],
    template: `
    <h3 >Source</h3>
    <ul ngbNav #nav="ngbNav" [(activeId)]="active" class="nav-tabs">
        <li *ngIf="snippets.markup" [ngbNavItem]="1">
            <a ngbNavLink id="HTML-tab">HTML</a>
            <ng-template ngbNavContent>
                <pre class="language-html"><code class="language-html" [innerHTML]="snippets.markup"></code></pre>
            </ng-template>
        </li>
        <li *ngIf="snippets.typescript" [ngbNavItem]="2">
            <a ngbNavLink id="TypeScript-tab">TypeScript</a>
            <ng-template ngbNavContent>
            <pre class="language-typescript"><code class="language-typescript" [innerHTML]="snippets.typescript"></code></pre>
            </ng-template>
        </li>
        <li *ngIf="snippets.css" [ngbNavItem]="3">
            <a ngbNavLink id="CSS-tab">CSS</a>
            <ng-template ngbNavContent>
            <pre class="language-css"><code class="language-css" [innerHTML]="snippets.css"></code></pre>
            </ng-template>
        </li>
        <li *ngIf="snippets.service" [ngbNavItem]="4">
            <a ngbNavLink id="Service-tab">Service</a>
            <ng-template ngbNavContent>
            <pre class="language-typescript"><code class="language-typescript" [innerHTML]="snippets.service"></code></pre>
            </ng-template>
        </li>
        <li *ngIf="snippets.container" [ngbNavItem]="5">
            <a ngbNavLink id="Container-tab">Container</a>
            <ng-template ngbNavContent>
            <pre class="language-typescript"><code class="language-typescript" [innerHTML]="snippets.container"></code></pre>
            </ng-template>
        </li>
    </ul>

    <div [ngbNavOutlet]="nav"></div>
    `
})
export class CodeBoxComponent {
    @Input()
    public snippets = {markup: '', typescript: '', css: '', service: '', container: ''};
    public active = 1;
}
