/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - scroll-top.component.ts
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
import { Component, Input, HostListener } from '@angular/core';
var ScrollTopComponent = (function () {
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
    return ScrollTopComponent;
}());
__decorate([
    Input()
], ScrollTopComponent.prototype, "label", void 0);
__decorate([
    HostListener('window:scroll', [])
], ScrollTopComponent.prototype, "onWindowScroll", null);
ScrollTopComponent = __decorate([
    Component({
        selector: 'scroll-top',
        styles: ['a { display: inline;}'],
        template: "\n    <a href=\"javascript:void(0)\" class=\"o-scroll-up\" title=\"{{label}}\"\n    onclick=\"window.scrollTo(0, 0);\" *ngIf=\"showMe\">\n      <span class=\"o-scroll-up-text hidden-sm-down\">{{label}}</span>\n      <span class=\"o-scroll-up-icon\" aria-hidden=\"true\"></span>\n    </a>\n  "
    })
], ScrollTopComponent);
export { ScrollTopComponent };
//# sourceMappingURL=scroll-top.component.js.map