/*!
 * --------------------------------------------------------------------------
 * Ng-boosted - o-carousel.component.ts
 * copyright 2017 Orange SA
 * src: https://github.com/ksachdeva/angular2-swiper/blob/master/src/ks-swiper.ts
 * Licensed under MIT (https://github.com/Orange-OpenSource/ng-boosted/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
import { ElementRef, OnInit } from '@angular/core';
export declare class OCarouselContainerComponent implements OnInit {
    private elementRef;
    pager: any;
    options: any;
    swiper: any;
    showPager: boolean;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    update(): void;
}
