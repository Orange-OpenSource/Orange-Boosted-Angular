import { Component } from '@angular/core';

@Component({
    selector: 'demo-swiper',
    styles: [`
        >>> .swiper-container {
            width: 37.5rem;
            margin-left: 0;
        }
    `],
    templateUrl: './swiper.component.html'
})
export class DemoSwiperComponent {
    public example1SwipeOptions: any;

    constructor() {
        this.example1SwipeOptions = {
        autoplay: {
            delay: 1500,
        },
        slidesPerView: 1,
        loop: true,
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
