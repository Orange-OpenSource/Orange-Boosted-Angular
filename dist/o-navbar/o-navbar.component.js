/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-navbar.component.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TEST_PATTERN = /xs|sm|md|lg|xl/;
var ONavLink = (function () {
    function ONavLink() {
    }
    return ONavLink;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ONavLink.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ONavLink.prototype, "route", void 0);
ONavLink = __decorate([
    core_1.Directive({ selector: 'o-nav-link' })
], ONavLink);
exports.ONavLink = ONavLink;
var ONavbarComponent = (function () {
    function ONavbarComponent() {
        this.pattern = TEST_PATTERN;
        this.isCollapsed = true;
    }
    return ONavbarComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ONavbarComponent.prototype, "homeRoute", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ONavbarComponent.prototype, "breakpoint", void 0);
__decorate([
    core_1.ContentChildren(ONavLink),
    __metadata("design:type", core_1.QueryList)
], ONavbarComponent.prototype, "items", void 0);
ONavbarComponent = __decorate([
    core_1.Component({
        selector: 'o-navbar',
        template: "\n    <nav [class]=\"'navbar navbar-inverse ' + (pattern.test(breakpoint) ? 'navbar-toggleable-'+breakpoint : 'navbar-toggleable-sm')\" role=\"navigation\">\n        <div class=\"container\">\n            <a class=\"navbar-brand logo\" [routerLink]=\"homeRoute\">\n                <img src=\"/assets/img/orange-logo.jpg\" alt=\"Back to homepage\" title=\"Back to homepage\">\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\"\n              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n              <span class=\"sr-only\">toggle navigation</span>\n              <span class=\"icon-menu\"></span>\n            </button>\n            <div class=\"navbar-collapse collapse\" id=\"collapsingNavbarHead\" [ngbCollapse]=\"isCollapsed\">\n              <ul class=\"navbar-nav\">\n                <li class=\"nav-item\" routerLinkActive=\"active\" *ngFor=\"let item of items\">\n                  <a class=\"nav-link\" [routerLink]=\"item.route\">{{item.title}}</a>\n                </li>\n              </ul>\n            </div>\n        </div>\n    </nav>\n  "
    })
], ONavbarComponent);
exports.ONavbarComponent = ONavbarComponent;
//# sourceMappingURL=o-navbar.component.js.map