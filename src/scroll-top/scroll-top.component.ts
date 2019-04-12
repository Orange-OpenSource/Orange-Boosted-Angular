/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { Component, Input, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'scroll-top',
  styles: ['a { display: inline;}'], // boosted css fix
  template: `
    <a href="javascript:void(0)" class="o-scroll-up" title="{{label}}"
    (click)="scrollToTop()" *ngIf="showMe">
      <span class="o-scroll-up-text hidden-sm-down">{{label}}</span>
      <span class="o-scroll-up-icon" aria-hidden="true"></span>
    </a>
  `
})

export class ScrollTopComponent {
  public showMe = false;

  @Input()
  public label: string;

  @HostListener('window:scroll', [])
  public onWindowScroll() {
    if (document.documentElement.scrollTop > window.innerHeight) {
        this.showMe = true;
    } else {
        this.showMe = false;
    }
  }

  public scrollToTop() {
    document.documentElement.scrollTop = 0;
  }
}
