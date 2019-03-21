import { Component, Input, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

@Component({
    selector: 'demo-alert',
    template: require('./alert.component.html')
})
export class DemoAlert implements OnInit {
  @Input()
  public alerts: IAlert[] = [];
  private backup: IAlert[] = [];

  constructor(private _analytics: Analytics) {
    this.alerts.push({
      id: 1,
      type: 'success',
      message: 'This is an success alert',
    }, {
      id: 2,
      type: 'info',
      message: 'This is an info alert',
    }, {
      id: 3,
      type: 'warning',
      message: 'This is a warning alert',
    }, {
      id: 4,
      type: 'danger',
      message: 'This is a danger alert',
    });
    this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
  }

  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

  public reset() {
    this.alerts = this.backup.map((alert: IAlert) => Object.assign({}, alert));
  }

  public ngOnInit(): void {
    this._analytics.trackPageViews();
  }
}

export interface IAlert {
  id: number;
  type: string;
  message: string;
}
