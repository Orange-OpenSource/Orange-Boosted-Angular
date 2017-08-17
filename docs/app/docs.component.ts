import { Component, Input } from '@angular/core';

@Component({
    selector: 'docs-wrapper',
    template: require('./docs.component.html')
})
export class DocsComponent {
    @Input()
    public component: string;

    public isCollapsed = true;
}
