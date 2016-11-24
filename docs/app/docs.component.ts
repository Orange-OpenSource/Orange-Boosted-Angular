import { Component, Input } from '@angular/core';

@Component({
    selector: 'docs-wrapper',
    styles: [`
        .sidebar-wrap {
            position: fixed;
            right: 0;
        }
        h4 {
            margin-top: 1.25rem;
        }
        .bd-sidebar,
        .bd-sidebar li a {
            padding-left: 0;
        }
    `],
    template: require('./docs.component.html')
})
export class DocsComponent {
    @Input()
    public component: string;
}
