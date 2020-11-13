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
        
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation" *ngIf="snippets.markup">
                <a class="nav-link active" id="HTML-tab" data-toggle="tab" href="#HTML" role="tab" aria-controls="HTML" aria-selected="true">HTML</a>
            </li>

            <li class="nav-item" role="presentation" *ngIf="snippets.typescript">
                <a class="nav-link" id="TypeScript-tab" data-toggle="tab" href="#TypeScript" role="tab" aria-controls="TypeScript" aria-selected="false">TypeScript</a>
            </li>

            <li class="nav-item" role="presentation" *ngIf="snippets.css">
                <a class="nav-link" id="CSS-tab" data-toggle="tab" href="#CSS" role="tab" aria-controls="CSS" aria-selected="false">CSS</a>
            </li>

            <li class="nav-item" role="presentation" *ngIf="snippets.service">
                <a class="nav-link" id="Service-tab" data-toggle="tab" href="#Service" role="tab" aria-controls="Service" aria-selected="false">Service</a>
            </li>

            <li class="nav-item" role="presentation" *ngIf="snippets.container">
                <a class="nav-link" id="Container-tab" data-toggle="tab" href="#Container" role="tab" aria-controls="Container" aria-selected="false">Container</a>
            </li>

        </ul>

        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="HTML" role="tabpanel" aria-labelledby="HTML-tab">
                <pre class="language-html"><code class="language-html" [innerHTML]="snippets.markup"></code></pre>
            </div>

            <div class="tab-pane fade" id="TypeScript" role="tabpanel" aria-labelledby="TypeScript-tab">
                <pre class="language-typescript"><code class="language-typescript" [innerHTML]="snippets.typescript"></code></pre>
            </div>

            <div class="tab-pane fade" id="CSS" role="tabpanel" aria-labelledby="CSS-tab">
                <pre class="language-css"><code class="language-css" [innerHTML]="snippets.css"></code></pre>
            </div>

            <div class="tab-pane fade" id="Service" role="tabpanel" aria-labelledby="Service-tab">
                <pre class="language-typescript"><code class="language-typescript" [innerHTML]="snippets.service"></code></pre>
            </div>

            <div class="tab-pane fade" id="Container" role="tabpanel" aria-labelledby="Container-tab">
                <pre class="language-typescript"><code class="language-typescript" [innerHTML]="snippets.container"></code></pre>
            </div>

        </div>


    `
})
export class CodeBoxComponent {
    @Input()
    public snippets = {markup: '', typescript: '', css: '', service: '', container: ''};
}
