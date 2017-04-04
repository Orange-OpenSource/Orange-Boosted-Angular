/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2017 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  Directive,
  Component,
  Input,
  QueryList,
  ContentChildren,
  HostBinding
} from '@angular/core';

const TEST_PATTERN = /xs|sm|md|lg|xl|xxl/;

@Component({
  selector: 'li[o-nav-link]',
  template: `
    <a [routerLink]="route" class="nav-link" routerLinkActive="active"
     [attr.title]="title === 'undefined' ? null : title"><ng-content></ng-content></a>
  `
})
export class ONavLink {
  @Input()
  public route: string;

  @Input()
  public title: string;

  @HostBinding('class')
  public NavLinkClass = 'nav-item';
}

@Component({
  selector: 'li[o-nav-menu]',
  styles: [`
    a:hover {
      cursor: pointer;
    }
  `],
  template: `
    <a class="nav-link dropdown-toggle" ngbDropdownToggle [attr.title]="title === 'undefined' ? null : title">{{menuTitle}}</a>
    <ng-content class="dropdown-menu"></ng-content>
  `
})
export class ONavMenu {
  @Input()
  public menuTitle: string;

  @Input()
  public title: string;

  @HostBinding('class')
  public NavLinkClass = 'nav-item dropdown';
}

@Component({
  selector: 'o-navbar',
  template: `
    <nav [class]="'navbar navbar-inverse ' + (pattern.test(breakpoint) ? 'navbar-toggleable-'+breakpoint : 'navbar-toggleable-sm')" role="navigation">
        <div class="container">
            <a class="navbar-brand logo" [routerLink]="homeRoute">
                <img [attr.src]="brandPath" [attr.alt]="brandLabel" [attr.title]="brandLabel">
            </a>
            <button class="navbar-toggler" type="button" (click)="isCollapsed = !isCollapsed"
              [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
              <span class="sr-only">toggle navigation</span>
              <span class="icon-menu"></span>
            </button>
            <div class="navbar-collapse collapse" id="collapsingNavbarHead" [ngbCollapse]="isCollapsed">
              <ul class="navbar-nav">
                <ng-content></ng-content>
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

  @Input()
  public brandPath: string;

  @Input()
  public brandLabel: string;

  @ContentChildren(ONavLink)
  public items: QueryList<ONavLink>;
}
