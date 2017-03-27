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
import { Component, Injectable, Inject, ElementRef, Host } from '@angular/core';
import { OCarouselContainerComponent } from './o-carousel-container.component';
var OCarouselComponent = (function () {
    function OCarouselComponent(elementRef, swiper) {
        this.elm = elementRef.nativeElement;
        this.swiper = swiper;
    }
    OCarouselComponent.prototype.ngAfterViewInit = function () {
        this.elm.classList.add('swiper-slide');
        this.swiper.update();
    };
    return OCarouselComponent;
}());
OCarouselComponent = __decorate([
    Injectable(),
    Component({
        selector: 'o-carousel-slide',
        template: '<div><ng-content></ng-content></div>'
    }),
    __param(0, Inject(ElementRef)),
    __param(1, Host()), __param(1, Inject(OCarouselContainerComponent))
], OCarouselComponent);
export { OCarouselComponent };
//# sourceMappingURL=o-carousel.component.js.map