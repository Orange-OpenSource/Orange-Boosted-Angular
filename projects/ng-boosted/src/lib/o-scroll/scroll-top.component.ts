/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'lib-scroll-top',
  templateUrl: './scroll-top.component.html'
})
export class ScrollTopComponent {
  public showMe = false;

  @Input() public label: string;

  public ScrollToTop() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll', []) public onWindowScroll() {
    document.documentElement.scrollTop > window.innerHeight ? this.showMe = true : this.showMe = false;
  }
}
