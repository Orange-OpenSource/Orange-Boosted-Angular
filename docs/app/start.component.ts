import { Component } from '@angular/core';

@Component({
  selector: 'getting-started',
  template: require('./start.component.html')
})
export class StartComponent {
  public ngBoostedVersion = 'v0.0.1';
  public boostedVersion = '4.0.0-alpha.6';
  public angularVersion = '2.4.6';
  public ngBootstrapVersion = '1.0.0-alpha.20';
}
