import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'demo-swiper',
    styles: [`
        >>> .swiper-container {
            width: 37.5rem;
            margin-left: 0;
        }
    `],
    template: require('./swiper.component.html')
})
export class DemoSwiper {
    example1SwipeOptions: any;

    constructor() {
        this.example1SwipeOptions = {
        slidesPerView: 1,
        loop: false,
        a11y: true,
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
      };
    }
}
