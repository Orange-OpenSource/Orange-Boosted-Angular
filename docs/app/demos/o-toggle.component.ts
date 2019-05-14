import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
    selector: 'demo-o-toggle',
    styles: [`
        h4 {
            margin-top: 2.5rem;
        }
    `],
    template: require('./o-toggle.component.html')
})
export class DemoOToggle implements OnInit {
    // define which radio is toggled on init
    public model = 2;
    public model2 = 1;
    constructor(private _analytics: Analytics) {}
    public ngOnInit(): void {
        this._analytics.trackPageViews();
    }
}
