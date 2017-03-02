import { Component } from '@angular/core';

@Component({
  selector: 'getting-started',
  template: require('./start.component.html')
})
export class StartComponent {
  public ngBoostedVersion = NGBOOSTED_VERSION;
  public boostedVersion = BOOSTED_VERSION;
  public angularVersion = ANGULAR_VERSION;
  public ngBootstrapVersion = NGBOOTSTRAP_VERSION;
}
