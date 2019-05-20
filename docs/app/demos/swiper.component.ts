import { Component, OnInit } from '@angular/core';
import { Analytics } from './shared/analytics';

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
export class DemoSwiper implements OnInit {
    public example1SwipeOptions: any;

    constructor(private _analytics: Analytics) {
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
    public ngOnInit(): void {
        this._analytics.trackPageViews();
    }
}
