/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  Directive,
  Component,
  Input,
  HostBinding,
  ElementRef,
  ViewChild,
  DoCheck
} from '@angular/core';

const TEST_PATTERN = /xs|sm|md|lg|xl|xxl/;

@Component({
  selector: 'li[o-nav-link]',
  template: `
    <a #link [routerLink]="route" [queryParams]="query" class="nav-link" routerLinkActive="active"
     [attr.title]="title === 'undefined' ? null : title"
     [attr.aria-current]="isActive"><ng-content></ng-content></a>
  `
})
export class ONavLink implements DoCheck {
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
  template: `
    <button class="nav-link" ngbDropdownToggle [attr.title]="title === 'undefined' ? null : title"
    (click)="$event.stopPropagation();">{{menuTitle}}</button>
    <ng-content></ng-content>
  `
})
export class ONavMenu {
  @HostBinding('class') public dropdownClass = 'nav-item dropdown';

  @Input()
  public menuTitle: string;

  @Input()
  public title: string;
}

@Component({
  selector: 'o-navbar',
  styles: [`
    .navbar-nav { width: 100%;}

    >>> a:hover {
      cursor: pointer;
    }
  `],
  template: `
    <nav [class]="'navbar navbar-dark bg-dark ' +
     (pattern.test(breakpoint) ? 'navbar-expand-'+breakpoint : 'navbar-toggleable-sm')" role="navigation">
        <div class="container">
            <a class="navbar-brand logo" [routerLink]="homeRoute">
                <img [attr.src]="brandPath" [attr.alt]="brandLabel" [attr.title]="brandLabel">
            </a>
            <button class="navbar-toggler" type="button" (click)="isCollapsed = !isCollapsed"
              [attr.aria-expanded]="!isCollapsed" aria-controls="collapsingNavbarHead">
              <span class="navbar-toggler-icon"></span>
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
}
