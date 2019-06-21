/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-nav-link.component.ts
 * copyright 2019 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { Component, Input, HostBinding, ElementRef, ViewChild, DoCheck } from '@angular/core';

  @Component({
    selector: 'lib-li[o-nav-link]',
    templateUrl: './o-nav-link.component.html'
  })
  export class ONavLinkComponent implements DoCheck {
    @HostBinding('class.nav-item')

    @Input()
    public route: string;

    @Input()
    public query: string;

    @Input()
    public title: string;

    @ViewChild('link')
    public link: ElementRef;

    public isActive = false;

    public ngDoCheck() {
      this.isActive = this.link.nativeElement.classList.contains('active');
    }
  }
