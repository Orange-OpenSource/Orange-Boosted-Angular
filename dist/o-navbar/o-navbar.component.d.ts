/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2017 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { QueryList } from '@angular/core';
export declare class ONavLink {
    route: string;
    title: string;
    NavLinkClass: string;
}
export declare class ONavMenu {
    menuTitle: string;
    title: string;
    NavLinkClass: string;
}
export declare class ONavbarComponent {
    pattern: RegExp;
    isCollapsed: boolean;
    homeRoute: string;
    breakpoint: string;
    brandPath: string;
    brandLabel: string;
    items: QueryList<ONavLink>;
}
