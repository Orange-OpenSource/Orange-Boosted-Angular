import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'demo-accordion',
  template: require('./accordion.component.html')
})
export class DemoAccordion implements OnInit {
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
    this._analytics.trackPageViews();
  }

}
