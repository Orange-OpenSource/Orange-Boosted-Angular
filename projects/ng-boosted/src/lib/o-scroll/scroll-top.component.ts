/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: 'scroll-top',
  template: `
    <a *ngIf="showMe" href="javascript:void(0)" class="o-scroll-up" title="{{label}}"
    onclick="window.scrollTo(0, 0);">
      <span class="o-scroll-up-text hidden-sm-down">{{label}}</span>
      <span class="o-scroll-up-icon" aria-hidden="true"></span>
    </a>
  `,
  styles: ['a { display: inline;}']
})
export class ScrollTopComponent {

  public showMe:boolean = false;
  @Input() public label:string;

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    if (document.documentElement.scrollTop > window.innerHeight) {
      this.showMe = true;
    } else {
      this.showMe = false;
    }
  }
}
