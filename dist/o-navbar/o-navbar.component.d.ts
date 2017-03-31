/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2017 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { QueryList } from '@angular/core';
export declare class ONavLink {
    title: string;
    route: string;
}
export declare class ONavbarComponent {
    pattern: RegExp;
    isCollapsed: boolean;
    homeRoute: string;
    breakpoint: string;
    items: QueryList<ONavLink>;
}
