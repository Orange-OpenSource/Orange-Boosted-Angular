/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-dropdown.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { Directive, HostListener, ElementRef, AfterViewInit } from '@angular/core';

@Directive ({
    // tslint:disable-next-line:directive-selector
    selector: '[ngbDropdown]'   // using same selector as ng-bootsrap NgbDropdown directive
})
export class ODropdownDirective implements AfterViewInit {
    private dropdownMenu: any;

    constructor(private elRef: ElementRef) { }

    public ngAfterViewInit() {
        this.dropdownMenu = this.elRef.nativeElement.querySelectorAll('.dropdown-menu')[0];
    }

    @HostListener('openChange', ['$event'])
    public handleDropdownFocus(isOpenEvent) {
        if (isOpenEvent) {
            setTimeout(() => {
                this.dropdownMenu.firstElementChild.focus();
            });
        }
    }
 }
