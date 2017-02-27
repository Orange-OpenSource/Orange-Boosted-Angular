/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  Directive,
  Component,
  Input,
  QueryList,
  ContentChildren,
} from '@angular/core';

const TEST_PATTERN = /xs|sm|md|lg|xl|xxl/;

@Directive({selector: 'o-nav-link'})
export class ONavLink {
  @Input()
  public title: string;

  @Input()
  public route: string;
}

@Component({
  selector: 'o-navbar',
  template: `
    <nav [class]="'navbar navbar-inverse ' + (pattern.test(breakpoint) ? 'navbar-toggleable-'+breakpoint : 'navbar-toggleable-sm')" role="navigation">
        <div class="container">
            <a class="navbar-brand logo" [routerLink]="homeRoute">
                <img src="/assets/img/orange-logo.jpg" alt="Back to homepage" title="Back to homepage">
            </a>
            <button class="navbar-toggler" type="button" (click)="isCollapsed = !isCollapsed"
              [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
              <span class="sr-only">toggle navigation</span>
              <span class="icon-menu"></span>
            </button>
            <div class="navbar-collapse collapse" id="collapsingNavbarHead" [ngbCollapse]="isCollapsed">
              <ul class="navbar-nav">
                <li class="nav-item" routerLinkActive="active" *ngFor="let item of items">
                  <a class="nav-link" [routerLink]="item.route">{{item.title}}</a>
                </li>
              </ul>
            </div>
        </div>
    </nav>
  `
})
export class ONavbarComponent {
  public pattern = TEST_PATTERN;

  public isCollapsed = true;

  @Input()
  public homeRoute: string;

  @Input()
  public breakpoint: string;

  @ContentChildren(ONavLink)
  private items: QueryList<ONavLink>;
}
