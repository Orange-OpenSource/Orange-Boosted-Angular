/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2017 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
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
    OCarouselComponent.decorators = [
        { type: Injectable },
        { type: Component, args: [{
                    selector: 'o-carousel-slide',
                    template: '<div><ng-content></ng-content></div>'
                },] },
    ];
    /** @nocollapse */
    OCarouselComponent.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] },] },
        { type: OCarouselContainerComponent, decorators: [{ type: Host }, { type: Inject, args: [OCarouselContainerComponent,] },] },
    ]; };
    return OCarouselComponent;
}());
export { OCarouselComponent };
//# sourceMappingURL=o-carousel.component.js.map