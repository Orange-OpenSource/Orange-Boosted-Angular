/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2017 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, Injectable, Inject, ElementRef } from '@angular/core';
var Swiper = require('swiper');
var OCarouselContainerComponent = (function () {
    function OCarouselContainerComponent(elementRef) {
        this.elementRef = elementRef;
    }
    OCarouselContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var nativeElement = this.elementRef.nativeElement;
        setTimeout(function () {
            _this.swiper = new Swiper(nativeElement.children[0], _this.options);
        });
    };
    OCarouselContainerComponent.prototype.update = function () {
        var _this = this;
        setTimeout(function () {
            _this.swiper.update();
        });
    };
    return OCarouselContainerComponent;
}());
__decorate([
    Input()
], OCarouselContainerComponent.prototype, "pager", void 0);
__decorate([
    Input()
], OCarouselContainerComponent.prototype, "options", void 0);
OCarouselContainerComponent = __decorate([
    Injectable(),
    Component({
        selector: 'o-carousel-container',
        template: "<div class=\"swiper-container\">\n    <div class=\"swiper-wrapper\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"swiper-pagination\"></div>\n    <div class=\"swiper-button-prev\"></div>\n    <div class=\"swiper-button-next\"></div>\n  </div>"
    }),
    __param(0, Inject(ElementRef))
], OCarouselContainerComponent);
export { OCarouselContainerComponent };
//# sourceMappingURL=o-carousel-container.component.js.map