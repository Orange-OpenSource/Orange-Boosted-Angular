import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'demo-swiper',
    styles: [`
        >>> .swiper-container {
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
        keyboardControl: true,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
      };
    }
}
