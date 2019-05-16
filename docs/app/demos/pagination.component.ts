import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
    selector: 'demo-pagination',
    template: require('./pagination.component.html')
})
export class DemoPagination implements OnInit {
    constructor(private _analytics: Analytics) {}
    public ngOnInit(): void {
        this._analytics.trackPageViews();
    }
}
