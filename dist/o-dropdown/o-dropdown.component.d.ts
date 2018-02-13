/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-dropdown.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { ElementRef, AfterViewInit } from '@angular/core';
export declare class ODropdownComponent implements AfterViewInit {
    private elRef;
    private dropdownMenu;
    constructor(elRef: ElementRef);
    ngAfterViewInit(): void;
    private handleDropdownFocus(isOpenEvent);
}
