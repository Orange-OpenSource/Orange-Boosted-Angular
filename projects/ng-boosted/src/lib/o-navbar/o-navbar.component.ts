/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2019 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { Component, Input } from '@angular/core';

  const TEST_PATTERN = /xs|sm|md|lg|xl|xxl/;

  @Component({
    selector: 'lib-o-navbar',
    styles: [`
      .navbar-nav { 
        width: 100%;
      }
      >>> a:hover {
        cursor: pointer;
      }
    `],
    templateUrl: './o-navbar.component.html'
  })
  export class ONavbarComponent {
    public pattern = TEST_PATTERN;
    public isCollapsed = true;

    @Input() public homeRoute: string;

    @Input() public breakpoint: string;

    @Input() public brandPath: string;

    @Input() public brandLabel: string;
}
