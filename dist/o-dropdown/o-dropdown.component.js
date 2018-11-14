/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-dropdown.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Directive, HostListener, ElementRef } from '@angular/core';
var ODropdownComponent = /** @class */ (function () {
    function ODropdownComponent(elRef) {
        this.elRef = elRef;
    }
    ODropdownComponent.prototype.ngAfterViewInit = function () {
        this.dropdownMenu = this.elRef.nativeElement.querySelectorAll('.dropdown-menu')[0];
    };
    ODropdownComponent.prototype.handleDropdownFocus = function (isOpenEvent) {
        var _this = this;
        if (isOpenEvent) {
            setTimeout(function () {
                _this.dropdownMenu.firstElementChild.focus();
            });
        }
    };
    ODropdownComponent.decorators = [
        { type: Directive, args: [{
                    selector: '[ngbDropdown]' // using same selector as ng-bootsrap NgbDropdown directive
                },] },
    ];
    /** @nocollapse */
    ODropdownComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ODropdownComponent.propDecorators = {
        handleDropdownFocus: [{ type: HostListener, args: ['openChange', ['$event'],] }]
    };
    return ODropdownComponent;
}());
export { ODropdownComponent };
//# sourceMappingURL=o-dropdown.component.js.map