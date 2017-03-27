/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * copyright 2017 Orange SA
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Directive, Component, Input, ContentChildren, } from '@angular/core';
var TEST_PATTERN = /xs|sm|md|lg|xl|xxl/;
var ONavLink = (function () {
    function ONavLink() {
    }
    return ONavLink;
}());
__decorate([
    Input()
], ONavLink.prototype, "title", void 0);
__decorate([
    Input()
], ONavLink.prototype, "route", void 0);
ONavLink = __decorate([
    Directive({ selector: 'o-nav-link' })
], ONavLink);
export { ONavLink };
var ONavbarComponent = (function () {
    function ONavbarComponent() {
        this.pattern = TEST_PATTERN;
        this.isCollapsed = true;
    }
    return ONavbarComponent;
}());
__decorate([
    Input()
], ONavbarComponent.prototype, "homeRoute", void 0);
__decorate([
    Input()
], ONavbarComponent.prototype, "breakpoint", void 0);
__decorate([
    ContentChildren(ONavLink)
], ONavbarComponent.prototype, "items", void 0);
ONavbarComponent = __decorate([
    Component({
        selector: 'o-navbar',
        template: "\n    <nav [class]=\"'navbar navbar-inverse ' + (pattern.test(breakpoint) ? 'navbar-toggleable-'+breakpoint : 'navbar-toggleable-sm')\" role=\"navigation\">\n        <div class=\"container\">\n            <a class=\"navbar-brand logo\" [routerLink]=\"homeRoute\">\n                <img src=\"assets/img/orange-logo.jpg\" alt=\"Back to homepage\" title=\"Back to homepage\">\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n              <span class=\"sr-only\">toggle navigation</span>\n              <span class=\"icon-menu\"></span>\n            </button>\n            <div class=\"navbar-collapse collapse\" id=\"collapsingNavbarHead\" [ngbCollapse]=\"isCollapsed\">\n              <ul class=\"navbar-nav\">\n                <li class=\"nav-item\" routerLinkActive=\"active\" *ngFor=\"let item of items\">\n                  <a class=\"nav-link\" [routerLink]=\"item.route\">{{item.title}}</a>\n                </li>\n              </ul>\n            </div>\n        </div>\n    </nav>\n  "
    })
], ONavbarComponent);
export { ONavbarComponent };
//# sourceMappingURL=o-navbar.component.js.map