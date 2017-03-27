/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2017 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { ElementRef, AfterViewInit } from '@angular/core';
import { OCarouselContainerComponent } from './o-carousel-container.component';
export declare class OCarouselComponent implements AfterViewInit {
    private elm;
    private swiper;
    constructor(elementRef: ElementRef, swiper: OCarouselContainerComponent);
    ngAfterViewInit(): void;
}
