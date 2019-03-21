import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
  selector: 'demo-progress-bar',
  styles: [`
    >>> .progress {
      margin-top: 1rem;
    }
  `],
  template: require('./progress-bar.component.html')
})

export class DemoProgressBar implements OnInit {
  constructor(private _analytics: Analytics) {}
  public ngOnInit(): void {
      this._analytics.trackPageViews();
  }
}
