import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'demo-dropdown',
  template: require('./dropdown.component.html')
})
export class DemoDropdown implements OnInit {
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
      this._analytics.trackPageViews();
  }
}
