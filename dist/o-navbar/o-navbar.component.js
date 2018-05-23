/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2018 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Component, Input, HostBinding, ElementRef, ViewChild } from '@angular/core';
var TEST_PATTERN = /xs|sm|md|lg|xl|xxl/;
var ONavLink = /** @class */ (function () {
    function ONavLink() {
        this.isActive = false;
    }
    ONavLink.prototype.ngDoCheck = function () {
        this.isActive = this.link.nativeElement.classList.contains('active');
    };
    ONavLink.decorators = [
        { type: Component, args: [{
                    selector: 'li[o-nav-link]',
                    template: "\n    <a #link [routerLink]=\"route\" class=\"nav-link\" routerLinkActive=\"active\"\n     [attr.title]=\"title === 'undefined' ? null : title\"\n     [attr.aria-current]=\"isActive\"><ng-content></ng-content></a>\n  "
                },] },
    ];
    /** @nocollapse */
    ONavLink.propDecorators = {
        "route": [{ type: HostBinding, args: ['class.nav-item',] }, { type: Input },],
        "title": [{ type: Input },],
        "link": [{ type: ViewChild, args: ['link',] },],
    };
    return ONavLink;
}());
export { ONavLink };
var ONavMenu = /** @class */ (function () {
    function ONavMenu() {
        this.dropdownClass = 'nav-item dropdown';
    }
    ONavMenu.decorators = [
        { type: Component, args: [{
                    selector: 'li[o-nav-menu]',
                    styles: ["\n    button {\n      border: 0;\n      background-color: #000;\n    }\n\n    button:hover {\n      cursor: pointer;\n    }\n  "],
                    template: "\n    <button class=\"nav-link\" ngbDropdownToggle [attr.title]=\"title === 'undefined' ? null : title\"\n    (click)=\"$event.stopPropagation();\">{{menuTitle}}</button>\n    <ng-content></ng-content>\n  "
                },] },
    ];
    /** @nocollapse */
    ONavMenu.propDecorators = {
        "dropdownClass": [{ type: HostBinding, args: ['class',] },],
        "menuTitle": [{ type: Input },],
        "title": [{ type: Input },],
    };
    return ONavMenu;
}());
export { ONavMenu };
var ONavbarComponent = /** @class */ (function () {
    function ONavbarComponent() {
        this.pattern = TEST_PATTERN;
        this.isCollapsed = true;
    }
    ONavbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'o-navbar',
                    styles: ["\n    .navbar-nav { width: 100%;}\n\n    >>> a:hover {\n      cursor: pointer;\n    }\n  "],
                    template: "\n    <nav [class]=\"'navbar navbar-dark bg-dark ' +\n     (pattern.test(breakpoint) ? 'navbar-expand-'+breakpoint : 'navbar-toggleable-sm')\" role=\"navigation\">\n        <div class=\"container\">\n            <a class=\"navbar-brand logo\" [routerLink]=\"homeRoute\">\n                <img [attr.src]=\"brandPath\" [attr.alt]=\"brandLabel\" [attr.title]=\"brandLabel\">\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapsingNavbarHead\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"navbar-collapse collapse\" id=\"collapsingNavbarHead\" [ngbCollapse]=\"isCollapsed\">\n              <ul class=\"navbar-nav\">\n                <ng-content></ng-content>\n              </ul>\n            </div>\n        </div>\n    </nav>\n  "
                },] },
    ];
    /** @nocollapse */
    ONavbarComponent.propDecorators = {
        "homeRoute": [{ type: Input },],
        "breakpoint": [{ type: Input },],
        "brandPath": [{ type: Input },],
        "brandLabel": [{ type: Input },],
    };
    return ONavbarComponent;
}());
export { ONavbarComponent };
//# sourceMappingURL=o-navbar.component.js.map