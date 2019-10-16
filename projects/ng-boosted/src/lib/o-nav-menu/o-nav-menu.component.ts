/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2019 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'li[o-nav-menu]',
    styles: [`
      button {
        border: 0;
        background-color: #000;
      }

      button:hover {
        cursor: pointer;
      }
    `],
    templateUrl: './o-nav-menu.component.html'
  })
  export class ONavMenuComponent {
    @HostBinding('class') public dropdownClass = 'nav-item dropdown';

    @Input()
    public menuTitle: string;

    @Input()
    public title: string;

    @Input()
    public idForLabelledby: string;
  }
