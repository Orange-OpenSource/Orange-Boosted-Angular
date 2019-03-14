/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { ElementRef, DoCheck } from '@angular/core';
export declare class ONavLink implements DoCheck {
    route: string;
    query: string;
    title: string;
    link: ElementRef;
    isActive: boolean;
    ngDoCheck(): void;
}
export declare class ONavMenu {
    dropdownClass: string;
    menuTitle: string;
    title: string;
}
export declare class ONavbarComponent {
    pattern: RegExp;
    isCollapsed: boolean;
    homeRoute: string;
    breakpoint: string;
    brandPath: string;
    brandLabel: string;
}
