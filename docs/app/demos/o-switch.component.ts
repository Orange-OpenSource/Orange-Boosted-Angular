import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
    selector: 'demo-o-switch',
    styles: [`
        label {
            font-weight: bold;
        }
    `],
    template: require('./o-switch.component.html')
})
export class DemoOSwitch implements OnInit {
    constructor(private _analytics: Analytics) {}
    public ngOnInit(): void {
        this._analytics.trackPageViews();
    }
 }
