/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
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
import { Component, Input, HostListener } from '@angular/core';
var ScrollTopComponent = /** @class */ (function () {
    function ScrollTopComponent() {
        this.showMe = false;
    }
    ScrollTopComponent.prototype.onWindowScroll = function () {
        if (document.documentElement.scrollTop > window.innerHeight) {
            this.showMe = true;
        }
        else {
            this.showMe = false;
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ScrollTopComponent.prototype, "label", void 0);
    __decorate([
        HostListener('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScrollTopComponent.prototype, "onWindowScroll", null);
    ScrollTopComponent = __decorate([
        Component({
            selector: 'scroll-top',
            styles: ['a { display: inline;}'],
            template: "\n    <a href=\"javascript:void(0)\" class=\"o-scroll-up\" title=\"{{label}}\"\n    onclick=\"window.scrollTo(0, 0);\" *ngIf=\"showMe\">\n      <span class=\"o-scroll-up-text hidden-sm-down\">{{label}}</span>\n      <span class=\"o-scroll-up-icon\" aria-hidden=\"true\"></span>\n    </a>\n  "
        })
    ], ScrollTopComponent);
    return ScrollTopComponent;
}());
export { ScrollTopComponent };
//# sourceMappingURL=scroll-top.component.js.map