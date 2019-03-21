import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
    selector: 'demo-carousel',
    template: require('./carousel.component.html')
})
export class DemoCarousel implements OnInit {
    constructor(private _analytics: Analytics) {}
    public ngOnInit(): void {
        this._analytics.trackPageViews();
    }
 }
