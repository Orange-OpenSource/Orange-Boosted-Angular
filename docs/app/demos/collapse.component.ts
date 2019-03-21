import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'demo-collapse',
  template: require('./collapse.component.html')
})
export class DemoCollapse implements OnInit {
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
      this._analytics.trackPageViews();
  }
 }
