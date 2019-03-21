import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'demo-tabs',
  template: require('./tabs.component.html')
})
export class DemoTabs implements OnInit {
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
      this._analytics.trackPageViews();
  }
}
