/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
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
import { Component, Input, HostBinding, ElementRef, ViewChild } from '@angular/core';
var TEST_PATTERN = /xs|sm|md|lg|xl|xxl/;
var ONavLink = /** @class */ (function () {
    function ONavLink() {
        this.isActive = false;
    }
    ONavLink.prototype.ngDoCheck = function () {
        this.isActive = this.link.nativeElement.classList.contains('active');
    };
    __decorate([
        HostBinding('class.nav-item'),
        Input(),
        __metadata("design:type", String)
    ], ONavLink.prototype, "route", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ONavLink.prototype, "query", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ONavLink.prototype, "title", void 0);
    __decorate([
        ViewChild('link'),
        __metadata("design:type", ElementRef)
    ], ONavLink.prototype, "link", void 0);
    ONavLink = __decorate([
        Component({
            selector: 'li[o-nav-link]',
            template: "\n    <a #link [routerLink]=\"route\" [queryParams]=\"query\" class=\"nav-link\" routerLinkActive=\"active\"\n     [attr.title]=\"title === 'undefined' ? null : title\"\n     [attr.aria-current]=\"isActive\"><ng-content></ng-content></a>\n  "
        })
    ], ONavLink);
    return ONavLink;
}());
export { ONavLink };
var ONavMenu = /** @class */ (function () {
    function ONavMenu() {
        this.dropdownClass = 'nav-item dropdown';
    }
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ONavMenu.prototype, "dropdownClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ONavMenu.prototype, "menuTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ONavMenu.prototype, "title", void 0);
    ONavMenu = __decorate([
        Component({
            selector: 'li[o-nav-menu]',
            styles: ["\n    button {\n      border: 0;\n      background-color: #000;\n    }\n\n    button:hover {\n      cursor: pointer;\n    }\n  "],
            template: "\n    <button class=\"nav-link\" ngbDropdownToggle [attr.title]=\"title === 'undefined' ? null : title\"\n    (click)=\"$event.stopPropagation();\">{{menuTitle}}</button>\n    <ng-content></ng-content>\n  "
        })
    ], ONavMenu);
    return ONavMenu;
}());
export { ONavMenu };
var ONavbarComponent = /** @class */ (function () {
    function ONavbarComponent() {
        this.pattern = TEST_PATTERN;
        this.isCollapsed = true;
    }
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ONavbarComponent.prototype, "homeRoute", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ONavbarComponent.prototype, "breakpoint", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ONavbarComponent.prototype, "brandPath", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ONavbarComponent.prototype, "brandLabel", void 0);
    ONavbarComponent = __decorate([
        Component({
            selector: 'o-navbar',
            styles: ["\n    .navbar-nav { width: 100%;}\n\n    >>> a:hover {\n      cursor: pointer;\n    }\n  "],
            template: "\n    <nav [class]=\"'navbar navbar-dark bg-dark ' +\n     (pattern.test(breakpoint) ? 'navbar-expand-'+breakpoint : 'navbar-toggleable-sm')\" role=\"navigation\">\n        <div class=\"container\">\n            <a class=\"navbar-brand logo\" [routerLink]=\"homeRoute\">\n                <img [attr.src]=\"brandPath\" [attr.alt]=\"brandLabel\" [attr.title]=\"brandLabel\">\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapsingNavbarHead\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"navbar-collapse collapse\" id=\"collapsingNavbarHead\" [ngbCollapse]=\"isCollapsed\">\n              <ul class=\"navbar-nav\">\n                <ng-content></ng-content>\n              </ul>\n            </div>\n        </div>\n    </nav>\n  "
        })
    ], ONavbarComponent);
    return ONavbarComponent;
}());
export { ONavbarComponent };
//# sourceMappingURL=o-navbar.component.js.map