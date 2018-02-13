/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2018 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { Component, Input, Injectable, Inject, ElementRef } from '@angular/core';
import Swiper from 'swiper';
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
    OCarouselContainerComponent.decorators = [
        { type: Injectable },
        { type: Component, args: [{
                    selector: 'o-carousel-container',
                    template: "<div class=\"swiper-container\">\n    <div class=\"swiper-wrapper\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"swiper-pagination\"></div>\n    <div class=\"swiper-button-prev\"></div>\n    <div class=\"swiper-button-next\"></div>\n  </div>"
                },] },
    ];
    /** @nocollapse */
    OCarouselContainerComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
    ]; };
    OCarouselContainerComponent.propDecorators = {
        "pager": [{ type: Input },],
        "options": [{ type: Input },],
    };
    return OCarouselContainerComponent;
}());
export { OCarouselContainerComponent };
//# sourceMappingURL=o-carousel-container.component.js.map