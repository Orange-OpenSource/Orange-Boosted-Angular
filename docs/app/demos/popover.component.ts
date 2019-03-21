import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component ({
    selector: 'demo-popover',
    styles: [`
    button {
        margin-right: 0.5rem;
    }
    `],
    template: require('./popover.component.html')
})
export class DemoPopover implements OnInit {
    constructor(private _analytics: Analytics) {}
    public ngOnInit(): void {
        this._analytics.trackPageViews();
    }
 }
