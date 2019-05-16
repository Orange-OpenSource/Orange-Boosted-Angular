import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'demo-dropdown',
  template: require('./dropdown.component.html'),
  styles: [`
  .dropdown-item.focus, .dropdown-item:focus {
      color: #fff;
      text-decoration: none;
      background-color: #000;
      }`]
})
export class DemoDropdown implements OnInit {
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
      this._analytics.trackPageViews();
  }
}
