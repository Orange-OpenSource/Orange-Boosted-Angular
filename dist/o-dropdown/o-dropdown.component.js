/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-dropdown.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
    __decorate([
        HostListener('openChange', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ODropdownComponent.prototype, "handleDropdownFocus", null);
    ODropdownComponent = __decorate([
        Directive({
            selector: '[ngbDropdown]' // using same selector as ng-bootsrap NgbDropdown directive
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ODropdownComponent);
    return ODropdownComponent;
}());
export { ODropdownComponent };
//# sourceMappingURL=o-dropdown.component.js.map