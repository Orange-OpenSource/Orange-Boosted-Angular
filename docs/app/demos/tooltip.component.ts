import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
    selector: 'demo-tooltip',
    styles: [`
    button {
        margin-right: 0.5rem;
    }
    `],
    template: require('./tooltip.component.html')
})
export class DemoTooltip implements OnInit {
    constructor(private _analytics: Analytics) {}
    public ngOnInit(): void {
        this._analytics.trackPageViews();
    }
}
